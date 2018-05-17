import React from 'react';
import './play.css';
import Cell from '../../Classes/Cell'
import specialShape from '../../data/specialShape'

class Play extends React.Component{
    constructor(){
        super();
        this.NextGeneration=this.NextGeneration.bind(this);
        this.state={scenne:[],generation:0};
        this.speed=1;
        this.run=false;
        this.Initilize(50);
    }
    componentDidMount(){
        this.interval=setInterval(this.NextGeneration,this.speed);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    NextGeneration(){
        if( this.run){
            this.setState({generation:this.state.generation+1});
            var temp=this.state.scenne;
            var max=this.state.scenne.length;
            var futureMort=[];
            var futureActiv=[];
            for (let i = 0; i < max; i++) {
                for (let j = 0; j < max; j++) {
                   var cp=0;
                   if(i-1>=0 && j-1>=0){
                        if(temp[i-1][j-1].className==='cell active'){
                            cp++;
                        }
                   }
                   if(j-1>=0){
                        if(temp[i][j-1].className==='cell active'){
                            cp++;
                        }
                   }
                   if(i+1<max&&j-1>=0){
                        if(temp[i+1][j-1].className==='cell active'){
                            cp++;
                        }
                   }
                   if(i-1>=0){
                        if(temp[i-1][j].className==='cell active'){
                            cp++;
                        }
                   }
                   if(i+1<max){
                        if(temp[i+1][j].className==='cell active'){
                            cp++;
                        }
                   }
                   if(i-1>=0&&j+1<max){
                        if(temp[i-1][j+1].className==='cell active'){
                            cp++;
                        }
                   }
                   if(j+1<max){
                        if(temp[i][j+1].className==='cell active'){
                            cp++;
                        }
                   }
                   if(i+1<max&&j+1<max){
                        if(temp[i+1][j+1].className==='cell active'){
                            cp++;
                        }
                   }
                   if(temp[i][j].className==='cell' && cp===3){
                       futureActiv.push(temp[i][j]);
                   }else if(temp[i][j].className==='cell active' && (cp!==3&&cp!==2)){
                       futureMort.push(temp[i][j]);
                   }
                }
            }
            for (let index = 0; index < futureMort.length; index++) {
                futureMort[index].className='cell';
            }
            for (let index = 0; index < futureActiv.length; index++) {
                futureActiv[index].className='cell active';
            }
            this.setState({scenne:temp});
        }
    }
    Run(){
        this.run=true;
    }
    Initilize(size){    
        for (let i = 0; i < size; i++) {
            this.state.scenne.push([])
            for (let j = 0; j < size; j++) {
                this.state.scenne[i].push(new Cell('cell',i,j));
            }
        }
    }
    Grid(size){
        var sc=[];
        for (let i = 0; i < size; i++) {
            sc.push([])
            for (let j = 0; j < size; j++) {
                sc[i].push(new Cell('cell',i,j));
            }
        }
        this.setState({scenne:sc});
    }
    ScenneRender(){       
        const element=this.state.scenne.map((row,index)=>
            <tr key={index}>
                {row.map((cell,index2)=>
                    <td key={index2} ><div className={cell.className} onClick={this.changeState.bind(this,cell)} ></div></td>
                )}
            </tr>
        );
        return element;
    }
    changeState(selectedCell){
       var sc=this.state.scenne;
       var cell=sc[selectedCell.x][selectedCell.y];
       if(cell.className==='cell')
            cell.className='cell active';
        else
            cell.className='cell';
       this.setState({scenne:sc});
       console.log(selectedCell);
    }
    OnSizeChange(){
        this.Grid(this.refs.gridSize.value);
    }
    Pause(){
        this.run=false;
    }
    ClearGrid(){
        this.Grid(this.refs.gridSize.value);
        this.run=false;
        this.setState({generation:0});
    }
    SpeedChange(){
        clearInterval(this.interval);
        this.interval=setInterval(this.NextGeneration,1001-this.refs.speed.value);
    }
    ShapeRender(cells){

        let shape=[];
        for (let i = 0; i < 15; i++) {
            let shaperow=[];
            for (let j = 0; j < 15; j++) {
                shaperow.push(new Cell('cell',i,j));
            }
            shape.push(shaperow)
        }
        cells.forEach(element => {
            shape[element.x][element.y].className='cell active';
        });
        const element=shape.map((row,index)=>
            <tr key={index}>
                {row.map((cell,index2)=>
                    <td key={index2} ><div className={cell.className}  ></div></td>
                )}
            </tr>
        );
        return element;
    }
    render(){
        return (
            <div className='container-fluid'>
                <div className='row '>
                    <div className="col" align="left" >
                        <form className="form-inline">
                            <div className="form-group-sm control">
                                <select className="form-control" ref='gridSize'  onChange={this.OnSizeChange.bind(this)} >
                                    <option>50</option>
                                    <option>60</option>
                                    <option>70</option>
                                    <option>80</option>
                                    <option>90</option>
                                    <option>100</option>
                                </select>
                            </div>
                            <div className="form-group control">
                                <input type="button"  className="form-control btn btn-success" onClick={this.Run.bind(this)} value="Run"/>
                            </div>
                            <div className="form-group control">
                                <input type="button" className="form-control btn btn-danger" onClick={this.Pause.bind(this)} value="Pause"/>
                            </div>
                            <div className="form-group control">
                                <input type="button" className="form-control btn btn-info" onClick={this.ClearGrid.bind(this)} value="Clear"/>
                            </div>
                            <div className="form-group-sm control">
                                <input type="range" ref='speed' min='1' defaultValue='1000' max='1000' onChange={this.SpeedChange.bind(this)} className="form-control"  placeholder="Speed"/>
                            </div>
                            <div className="form-group-sm control">
                                <label>Génération : {this.state.generation}</label>
                            </div>
                        </form>
                        <table className='grid' >
                            <tbody>
                                {this.ScenneRender()}
                            </tbody>
                        </table>
                    </div>
                    <div className="col specialShapeContainer"  >
                        {specialShape.map((example,index)=>
                            <div key={index} className="specialShape">
                                <div>
                                    <table>
                                        <tbody>
                                            {this.ShapeRender(example.Cells)}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="desc">{example.Name}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default Play;
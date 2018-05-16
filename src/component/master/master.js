import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../home/home'
import About from '../about/about'
import Play from '../play/play'
import './master.css'
class Master extends React.Component{
    render(){
        return(
            <div >
                <div className='header'>
                    <h2>Le royaume du Jeu de la vie</h2>
                    <p> L’univers plan du Jeu de la vie est l'exemple même d'un système simple
                        susceptible d'engendrer de la complexité, du calcul et...
                        certaines formes de beauté.<br/>
                        <small className="text-muted">Jean-Paul DELAHAYE</small>
                    </p>
                </div>
                <Router>
                    <div id="nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/play">Jouer</Link></li>
                            <li style={{float:'right'}}><Link to="/about">About</Link></li>
                        </ul>
                    <div >
                        <Route exact path="/" component={Home} />
                        <Route path="/about"  component={About} />
                        <Route path="/play"   component={Play} />
                    </div>
                    </div>
                </Router>
            </div>
        ) 
        
    }
}
export default Master ;
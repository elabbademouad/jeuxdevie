import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
class App extends React.Component{
    render(){
        return <h1>Hello Jeux de vie!</h1>
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

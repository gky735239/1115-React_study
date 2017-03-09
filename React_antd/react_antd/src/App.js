import React,{Component} from 'react';
import {Button} from 'antd';
import './App.css';

export default class App extends Component{

    render(){
        return(
            <div class="App">
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        );
    }

}

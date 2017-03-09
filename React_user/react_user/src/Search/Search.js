import React,{Component} from 'react';
export default class App extends Component {

    search = () => {
        let searchName = this.refs.username.value.trim();
        //将searchName交给父组件
        if (searchName) {
            this.props.searchName(searchName);
        }
    };

    render(){
        return(
            <div>
                <input type="text" placeholder="enter the name you search" ref="username"/>
                <button onClick={this.search}>Search</button>
            </div>
        );
    }


}
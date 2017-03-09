import React,{Component} from 'react';
import List from '../List/List'
import Search from '../Search/Search'

export default class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            searchName: null
        };
        this.searchName = this.searchName.bind(this);
    }

    searchName(searchName){
        this.setState({searchName});
    }


    render(){
        return(
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <Search searchName={this.searchName}/>
                </section>
                <List />
            </div>
        );
    }

}

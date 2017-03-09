import React,{Component} from 'react';
import axios from 'axios'
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstView: true,
            loading: false,
            errorMsg: null,
            users: []
        }
    
    }
    componentWillReceiveProps (nextProps) { //父组件更新，传递过来更新的内容
        //将状态更新为loading
        this.setState({
            firstView: false,
            loading: true
        });
        const {searchName} = nextProps;
        //发送ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`;
        axios.get(url)
            .then((response) => {
                const items = response.data.items;
                const users = items.map((item, index) => {
                    return {html_url: item.html_url, avatar_url: item.avatar_url, login: item.login}

                })
                //更新为成功状态
                this.setState({
                    loading: false,
                    users
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    errorMsg: error.message
                })
            })


    }

   
    
    render(){
        const {firstView, loading, errorMsg, users} = this.state;
        if(firstView){
            return <h2>Enter name to search</h2>;
        }else if(loading){
            return <h2>loading......</h2>;
        }else if(errorMsg){
            return <h2>error</h2>
        }else{
            const userList = users.map(user => {
                return (
                    <div className="card">
                        <a href={user.html_url}>
                            <img src={user.avatar_url} style={{width:'100px'}} role="presentation"/>
                        </a>
                        <p className="card-text">{user.login}</p>
                    </div>
                )
            });
            return <div className="row">{userList}</div>
        }

    }



}
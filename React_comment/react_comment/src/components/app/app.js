import React,{Component} from 'react';
import Add from '../add/add'
import List from '../list/list'
export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments: []
        };
        this.delete = this.delete.bind(this);

    }

    componentDidMount (){
        //初始化数据
        let comments = [
            {
                username: "Tom",
                content: "ReactJS好难啊!",
                id: Date.now()
            },
            {
                username: "JACK",
                content: "ReactJS还不错!",
                id: Date.now() + 1
            }
        ];
        //设置状态
        this.setState({comments});
    }

    //add函数
        add = comment => {
            let comments = this.state.comments;
            comments.unshift(comment);
            this.setState({comments});
        };
        remove (index) {
            let comments = this.state.comments;
            comments.splice(index, 1);
            this.setState({ comments });
        }

    render(){
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add add={this.add}/>
                    <List comments={this.state.comments} delete={this.remove}/>
                </div>
            </div>
        );
    }

}

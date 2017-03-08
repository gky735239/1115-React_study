import React,{Component} from 'react';
export default class List extends Component{

    constructor (props) {
        super(props);
        this.state = {
            username: '',
            content: ''
        };
        this.addComment = this.addComment.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changeContent = this.changeContent.bind(this);
    }

    addComment(){
        let {username, content} = this.state;
        let coment = {username, content}
        //数据传给父组件
        this.props.add(coment);
        //清除输入数据
        this.setState({
        username: '',
        content: ''
        })
    };






    changeUsername(event){
        this.setState({username: event.target.value});
    }
    changeContent(event){
        this.setState({content: event.target.value});
    }


    render(){
        return(
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref="username" onChange={this.changeUsername}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref="comment"
                        onChange={this.changeContent}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}
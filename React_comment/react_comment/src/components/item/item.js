import React,{Component} from 'react';
import './item.css'
export default class List extends Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    removeComment(){
        let { comment, remove, index} = this.props;
        if(confirm(`你确定要删除${comment.username}?`)){
            remove(index);
        }
    }

    render(){
        const {comment} = this.props;
        return(
            <li className="list-group-item">
                <div className="handle">
                    //eslint-disable-next-line
                    <a href="javascript:;" onClick={this.removeComment}>删除</a>
                </div>
                <p className="user"><span >{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        );
    }
}
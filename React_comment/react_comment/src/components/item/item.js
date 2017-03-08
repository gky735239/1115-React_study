import React,{Component} from 'react';
import './item.css'
export default class List extends Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    remove(){
        let { comment, remove, index} = this.props;
        if(confirm(`你确定要删除${comment.username}?`)){
            remove(index);
        }
    }

    render(){
        return(
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.remove}>删除</a>
                </div>
                <p className="user"><span >xxx</span><span>说:</span></p>
                <p className="centence">React不错!</p>
            </li>
        );
    }
}
import React from "react";
import axios from "axios";
import Comments from "./comments";

export default class ListPosts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			showcomments: false
		};
		this.sharePost = this.sharePost.bind(this);
		this.likePost = this.likePost.bind(this);

	}
	render() {
		console.log(this.props.getPosts);
		return (
			<div className="list-component">
				<button onClick={this.props.getPosts}><span className="reload">&#x21bb;</span> Reload</button>
				<ul className="posts-list">
					{this.props.posts.map((item, idx) => {
						return (
							<li key={idx} className="post">
								<h2>{item.author}</h2><p>{item.date}</p>
								<p>{item.body}</p><br/>
								<button onClick={()=>{this.likePost(idx)}}>Like</button>
								<p>Likes: {item.likes}</p>
								<Comments 
									post={item}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}


	likePost(postid) {
		console.log(this.state.posts[postid]._id);
		axios.post('/post/likepost', {
			postid: this.state.posts[postid]._id
		}).then((res) => {
			this.setState({});
		});
	}
	sharePost() {
		axios.get('/post/sharepost', {}).then((res) =>{
			console.log(res);
			this.setState({
				posts: res.data
			});
		});
	}
}

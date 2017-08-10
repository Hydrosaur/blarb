import React from "react";
import axios from "axios";

export default class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "",
			comment: "",
			comments: this.props.post.comments
		};
		this.changeAuthor = this.changeAuthor.bind(this);
		this.changeComment = this.changeComment.bind(this);
		this.postComment = this.postComment.bind(this);
	}
	render() {
		return (
			<div className="comment-component">
				<input 
					type="text" 
					placeholder="Author:" 
					onChange={this.changeAuthor} 
					value={this.state.author}
				/>
				<input 
					type="text" 
					placeholder="Comment:" 
					onChange={this.changeComment} 
					value={this.state.comment}
				/>
				<button onClick={this.postComment}>Comment</button>
				<ul>
					{this.props.post.comments.map((item, idx) => {
						return (
							<li 
								key={idx} 
								className="comment">
								
								<p>{item.date}</p>
								<h4>{item.author}</h4>
								<p>{item.body}</p>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
	changeComment(event){
		// change the state to update the author input
		this.setState({
			comment: event.target.value
		});
	}
	changeAuthor(event){
		// change the state to update the post body input
		this.setState({
			author: event.target.value
		});
	}
	postComment(event){
		// request to post comment
		axios.post('/post/commentpost', {
			postid: this.props.post._id,
			author: this.state.author,
			comment: this.state.comment
		}).then((res) => {
			console.log(res);
			// save the comments
			var newComments = this.state.comments;
			newComments.pop();
			newComments.push({
				author: this.state.author,
				body: this.state.comment,
				date: JSON.stringify(new Date()),
				likes: 0
			});
			this.setState({
				author: "",
				comment: "",
				comments: newComments
			});
			newComments.pop();
		});
	}
}

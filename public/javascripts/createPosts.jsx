import React from "react";
import axios from "axios";

export default class CreatePosts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "",
			body: ""
		};

		this.postText = this.postText.bind(this);
		this.changeAuthor = this.changeAuthor.bind(this);
		this.changeBody = this.changeBody.bind(this);
	}
	render() {
		return (
			<div className="create-component">
				<input type="text" placeholder="Author:" onChange={this.changeAuthor} value={this.state.author}/>
				<br/>
				<textarea onChange={this.changeBody} value={this.state.body}></textarea>
				<br/>
				<button onClick={this.postText}>Post</button>
			</div>
		);
	}
	changeAuthor(event) {
		// change the state to update the author input
		this.setState({
			author: event.target.value
		});
	}
	changeBody(event) {
		// change the state to update the post body input
		this.setState({
			body: event.target.value
		});
	}
	postText() {
		// Save the author and body before changing the state
		var author = this.state.author;
		var body = this.state.body;
		axios.post('/post/posttext', 
		{
			data: {
				author: author,
				body: body,
			}
		}).then((res) => {
			console.log(res);
			this.setState({
				author: "",
				body: ""
			});
		}).catch((error) => {
			console.log(error);
		});
	}
}

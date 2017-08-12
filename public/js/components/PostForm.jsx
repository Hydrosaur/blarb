import React from 'react';

export default class PostForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			authorInput: "",
			bodyInput: ""
		};

		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleBodyChange = this.handleBodyChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleAuthorChange(event) {
		this.setState({
			authorInput: event.target.value
		});
	}

	handleBodyChange(event) {
		this.setState({
			bodyInput: event.target.value
		});
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<div className="well">
				<form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Author:" className="form-control" onChange={this.handleAuthorChange} value={this.state.authorInput}/>
					<br/>
					<div className="form-group form-body">
						<textarea placeholder="Say Something Here" className="form-control" onChange={this.handleBodyChange} value={this.state.bodyInput}></textarea>
						<button className="btn btn-primary pull-right" onClick={this.handleSubmit}>Post</button>
					</div>
				</form>
			</div>
		);
	}
}
import React from "react";
import axios from 'axios';
// import CreatePosts from "./createPosts";
import Timeline from "./Timeline";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'BlarbApp';
		this.refreshPosts = this.refreshPosts.bind(this);
	}

	componentWillMount() {
		console.log('mounting...');
	}

	render() {
		console.log('app.jsx render()');
		return (
			<div className="main-div">
				<Timeline posts={this.props.posts}/>
			</div>
		);
	}

	refreshPosts() {
		axios.get('/post/posts', {}).then((res) =>{
				console.log(res);
				this.setState({
					posts: res.data
				});
			}
		);
	}
}
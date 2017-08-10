import React from "react";
import axios from 'axios';
import Post from './Post';
export default class Timeline extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'BlarbApp';
	}

	componentWillMount() {
		console.log('mounting...');
	}

	render() {
		console.log('app.jsx render()');
		const { posts } = this.props;

		return (
			<div className="main-div">
				<h1>Timeline!</h1>
				{posts.map( (props) => (<Post key={props.id} {...props} />) )}
			</div>
		);
	}
}
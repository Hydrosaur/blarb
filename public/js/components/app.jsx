import React from "react";
import axios from 'axios';
import PostForm from "./PostForm";
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
			<div className="wrapper">
				<div className="box">
					<div className="row row-offcanvas row-offcanvas-left">
						<div className="column col-sm-10 col-xs-11" id="main">
							<h1>Blarb!</h1>
							<div className="padding">
								<div className="full col-sm-9">
									<div className="row">
										<div className="col-sm-5 main-well">
											<PostForm />
											<Timeline key={1} posts={this.props.posts}/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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
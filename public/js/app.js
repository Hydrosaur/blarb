import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import App from "components/app";
import axios from 'axios';

function init() {
	console.log('init()');
	const dummyDate = new Date();
	const res = [
		{
			id: 0,
			author: "Nibrok Yread",
			body: "My name is not Korbin Deary.",
			likes: ["Nibrok Yread"],
			postDate: dummyDate.toISOString(),
			avatar: "asdjifnaudgnsdfing",
			comments: [
				{
					author: "Nibrok Yread",
					body: "Yes, this is true.",
					date: dummyDate.toISOString(),
					likes: ["Nibrok Yread"]
				}
			]
		},
		{
			id: 1,
			author: "Neb Aynuj",
			body: "My name is not Korbin Deary.",
			likes: ["Nibrok Yread"],
			postDate: dummyDate.toISOString(),
			avatar: "asdjifnaudgnsdfing",
			comments: [
				{
					author: "Nibrok Yread",
					body: "Yes, this is true.",
					date: dummyDate.toISOString(),
					likes: ["Nibrok Yread"]
				}
			]
		}
	];

	ReactDOM.render(
		<App
			posts={res}
		/>,
		document.getElementById("content")
	);

	console.log('init()');
	// axios.get('/post/posts', {}).then((res) =>{
	// 		ReactDOM.render(
	// 			<App 
	// 				posts={res}
	// 			/>, 
	// 			document.getElementById("content")
	// 		);
	// 	} 
	// );
}

document.addEventListener('DOMContentLoaded', init);

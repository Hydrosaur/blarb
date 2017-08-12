import React from 'react';

export default function Post({
	author, 
	body, 
	likes, 
	postDate, 
	avatar,
	comments}) {
	return (
		<div className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">{author}</h3>
			</div>
			<div className="panel-body">
				{body}
			</div>
			<div className="panel-footer">
				{postDate} | {likes.length} <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
			</div>
		</div>
		/*
		<div>
			<p>Author: {author}</p>
			<p>Body {body}</p>
			<p>likes {likes.length}</p>
			<p>Date: {postDate}</p>
			<p>Avatar: {avatar}</p>
			<button>Like!</button>
			{comments.map( ({author, body, date, likes, id}) => (
				<div key={id}>
					<p>{author}</p>
					<p>{body}</p>
					<p>{date}</p>
					<p>{likes.length}</p>
				</div>
			))}
		</div>*/
	);
}
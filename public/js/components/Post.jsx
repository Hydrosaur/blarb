import React from 'react';

export default function Post({
	author, 
	body, 
	likes, 
	postDate, 
	avatar,
	comments}) {
	return (
		<div>
			<p>Author: {author}</p>
			<p>Body {body}</p>
			<p>likes {likes.length}</p>
			<p>Date: {postDate}</p>
			<p>Avatar: {avatar}</p>
			{comments.map( ({author, body, date, likes, id}) => (
				<div key={id}>
					<p>{author}</p>
					<p>{body}</p>
					<p>{date}</p>
					<p>{likes.length}</p>
				</div>
			))}
		</div>
	);
}
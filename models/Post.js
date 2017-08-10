const Schema = require('mongoose').Schema;

const Post = Schema({
	author: String,
    body: String,
    likes: [String],
	postDate: Date,
	avatar: String,
	id: String,
	comments: [
		{
			id: String,
			author: String,
			body: String,
			date: Date,
			likes: [String]
		}
	]
});

module.exports = Post;
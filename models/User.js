const Schema = require('mongoose').Schema;

const Post = require('./Post');

const User = Schema({
	firstName: String,
	lastName: String,
	avatar: String,
	posts: [Post.ObjectId]
});

module.exports = User;
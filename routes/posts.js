// ===================================================== 
// Express and MongoDB Requirements
//
const express = require('express');
const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
const router = express.Router();
const mongoose = require('mongoose');

// ===================================================== 
// Mongoose Schema Variables
//
let postSchema;
let Post;
let url = 'mongodb://kdeary:databaseparty@ds031922.mlab.com:31922/sandbox';
let Schema = mongoose.Schema;

// Connect mongoose to mlab url then store the connection to a database
mongoose.connect(url);
let db = mongoose.connection;

// Getting the Post Schema
const PostSchema = require('../models/Post');

// Once the database is open, create the Post schema.
db.once('open', () => {
    Post = mongoose.model('Post', PostSchema);
});

// ===================================================== 
// Mongoose Schema Variables
//
MongoClient.connect(url, (err, db) => {
	assert.equal(null, err);
	console.log("Connected successfully to server");
	let posts = db.collection('posts');
	/*
		When the "/posttext" POST request is received:
		1. Store the request parameters inside a variable.
		2. Store a Post schema with the parameters inside a variable.
		3. Save the stored Post inside MongoDB.
		Returns: Request Parameters
	*/
	router.post('/posttext', (req, res) => {
		// Store Parameters
		const parameters = req.body.data;
		console.log(parameters);
		// Store The Post
		const newpost = new Post({
			author: parameters.author,
			body: parameters.body,
			likes: 0,
			date: new Date(),
			icon: "",
			comments: []
		});
		//Store the Post
		newpost.save((err, post) => {
			if (err) {
				throw err;
			}
			res.send(parameters);
		});
	});
	/*
		When the "/posts" GET request is received, all the posts are sent back sorted by the latest date.
		Returns: all Posts in "latest" order.
	*/
	router.get('/posts', (req, res) => {
		Post.find({}, null, {sort: {date: -1}}, (err, docs) =>{
			res.send(docs);
		});
	});
	/*
		When the "/likepost" POST request is received:
		1. The parameters are stored in a variable.
		2. Find the post by it's postID.
		3. Increase the likes by 1.
		4. Save the Post back to MongoDB.
		Returns: The updated Post
	*/
	router.post('/likepost', (req, res) => {
		let parameters = req.body;
		Post.findById(parameters.postid,  (err, post) => {
			if (err) {
				return handleError(err);
			}
			post.likes = post.likes + 1;
			post.save((err, updatedPost) => {
				if (err) {
					return handleError(err);
				}
				res.send(updatedPost);
			});
		});
	});

	router.get('/removeall', (req, res) => {
		console.log("/removeall")
		Post.remove({}, function(err){
			// if(err){
			// 	res.send(err)
			// } else {
				res.send("Successfully deleted all posts.");
			//}
		});
	});
	/*
		When the "/commentpost" POST request is received:
		1. Store the parameters in a variable.
		2. Find the post by it's postID.
		3. Push the comment into the Post.
		4. Save the Post to MongoDB.
		Returns: Updated post with comment.
	*/
	router.post('/commentpost', (req, res) => {
		let parameters = req.body;
		Post.findById(parameters.postid, (err, post) => {
			if (err) {
				return handleError(err);
			}
			post.comments.push({
				author: req.body.author,
				body: req.body.comment,
				date: new Date(),
				likes: 0
			});
			post.save( (err, updatedPost) => {
				if (err) {
					return handleError(err);
				}
				res.send(updatedPost);
			});
		});
	});	
	db.close();
});

module.exports = router;

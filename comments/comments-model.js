const db = require("../data/db-config.js");

module.exports = {
  getCommentById,
  postComment,
  editComment,
  deleteComment,
  getUserComments
};

function getCommentById(id) {
  return db("comments").where({ id });
}

function postComment(comment) {
  return db("comments").insert(comment, "id");
}

function editComment(id, comment) {
  return db('comments').where({id}).update(comment, "id")
}

function deleteComment(id) {
  return db('comments').where({id}).del()
}

function getUserComments(){
  return db("comments")
  // .join('comments as c','uc.comments_id','c.id')
  // .join('users as u','uc.users_id','u.id')
  // .select('uc.id','u.username','c.*');
}

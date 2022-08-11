const User = require('./User');
const Post = require ('./Post');
const Vote = require('./Vote');

// create model associations
// associate post with user via user_id
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// associate user with post via user_id
Post.belongsTo(User, {
    foreignKey: 'user_id',
});
// associate post with user through vote via user_id
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});
// associate user with user through vote via post_id
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});
// associate user with vote via user_id
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});
// associate post with vote via post
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});
// associate vote with user via user_id
User.hasMany(Vote, {
    foreignKey: 'user_id'
});
// associate vote with post via post_id
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };

const { User } = require('../models');

const UserController = {
    //get all users
    getAllUsers(req, res) {
        User.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    //get user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: ['thoughts', 'friends'],
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    //create new user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },
    
    //update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id })
            .then(dbUserData => res.json(dbUserData))
            .catch(err =res.json(err));
    },

    //delete user by id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    }
};

module.exports = userController;
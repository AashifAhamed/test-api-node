const express = require('express');
const router = express.Router();
const UserFriends = require('../../models/UserFriends');
const Users = require('../../models/Users');


// create
router.post('/', async (req, res) => {
    const newUser = new Users(req.body);
    try {
        const user = await newUser.save();
        if (!user) throw Error('Something went wrong with the user')
        res.status(200).json(user);
    } catch {
        res.status(400).json({ msg: error })
    }
});

// read all 
router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        if (!users) throw Error('No Users found');
        
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ mesg: err })
    }
});


//read one
router.get('/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if (!user) throw Error('No Users');
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ mesg: err })
    }
});

router.get('/friends/:id', async (req, res) => {

    try {
        const user = await UserFriends.find({ user_id: req.params.id });
        if (!user) throw Error('No Users');
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ mesg: err })
    }
});


//update
router.patch('/:id', async (req, res) => {
    try {
        const user = await Users.findByIdAndUpdate(req.params.id, req.body);
        if (!user) throw Error('Something went wrong while updating the user');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const user = await Users.findByIdAndDelete(req.params.id);
        if (!user) throw Error('No user found!');
        res.status(200).json({ success: true })
    } catch (err) {
        res.status(400).json({ msg: error })
    }
});


module.exports = router;
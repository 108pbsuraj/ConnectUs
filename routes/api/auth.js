const express = require ('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { body, validationResult, check } = require('express-validator');


// @route   GET api/auth
// @desc    Test route
// @access  Public


router.get('/', auth, async(req, res) => {
    try {
        const user =await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});


// @route   post api/auth
// @desc    authentication user and get token
// @access  Public


router.post('/',
[
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
],
async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email, password} = req.body;

    try {
        
    //see if user exists

        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({errors:[{msg:'User does not exist!!'}]});
        }
 
    //get user gravatar

        // const avatar = gravatar.url(email,{
        //     s: '200',
        //     r: 'pg',
        //     d: 'mm'
        // });
        
        // user = new User({
        //     name,
        //     email,
        //     avatar,
        //     password
        // });

    //encrypt password using bcrypt

        // const salt= await bcrypt.genSalt(10);
        // user.password = await bcrypt.hash(password, salt);
        // await user.save();

    //matching password and email

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res
        .status(400)
        .json({errors:[{msg : 'Invalid credentials'}]});
    }

    //return jsonwebtoken

        const payload = {
            user:{
                id: user.id
            }
        };
        jwt.sign(payload,
            config.get('jwtSecret'),
            {expiresIn: 360000},
            (err, token) => {
                if(err) throw err;
                else 
                res.json({token}); 
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }

    // res.send('USER ROUTE');
});


module.exports=router;
const express = require ('express');
const router = express.Router();

// @route   post api/users
// @desc    Register user
// @access  Public


router.post('/', (req, res) => {
    console.log(req.body);// new code
    res.send('USER ROUTE');
});

module.exports=router;
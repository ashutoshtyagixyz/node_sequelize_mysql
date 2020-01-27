const User = require('../models/usersModel');

// to get all the users
exports.index = (req,res,next) => {
    User.findAll()
    .then((rows)=>{
        res.status(200).json({
            data        : rows
        });
    })
    .catch((err)=>{
        res.json(err);
    })
}

// get user by id
exports.getUser = (req,res,next) => {
    const user_id = req.params.userId;

    User.findAll({
        where: {
            id  : user_id
        }
    })
    .then((rows)=>{
        res.status(200).json({
            data        : rows
        });
    })
    .catch((err)=>{
        res.json(err);
    })

}//getUser END

exports.update = (req,res,next) => {
    const user_id = req.body.user_id;
    const username = req.body.username;

    User.update({
        username : username
    },{
        where : {
            id  :   user_id
        }
    })
    .then(result =>{
        res.status(200).json({
            status  : true,
            message : "User details updated successfully."
        });
    })
    .catch((err) => {

        console.log(err);
    })

}//update END

// delete user
exports.delete = (req,res,next) => {
    const user_id = req.params.userId;

    User.destroy({
        where   : {
            id    : user_id
        }
    }).then(result => {
        res.json(result);
    })
    .catch(err =>{
        console.log(err);
    });
}//delete END

// register user
exports.registration = (req,res,next) =>{
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        "username" : username,
        "password" : password
    })
    .then((res)=>{
        
    })
    .catch((err)=>{
        console.log(err);
    });
    res.end("end");
}//register user
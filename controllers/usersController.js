exports.registration = (req,res,next) =>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(username,password);
    res.end("end");
}
const { vrurls } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const Vrurl = db.vrurls;

const addUser = async (req, res) => {
    const body = req.body;
    
    let users = await Vrurl.update(req.body,{ where : { id : body.id}});
    if(users){
                res.status(200).json({
                    code: res.statusCode,
                    data: users,
                    message: 'user saved successfully'
                });
            }else{
                return res.json({
                    status:0,
                    message:"user doesn't saved"
                });
            }

    // if(user){
    //     let updateurl = await Vrurl.update(req.body,{where : {url:body.url}});
    //      console.log(updateurl);
    // }else{
    //     const users = await Vrurl.create(body);
    //     console.log(users);
    //     if(users){
    //         res.status(200).json({
    //             code: res.statusCode,
    //             data: users,
    //             message: 'user saved successfully'
    //         });
    //     }else{
    //         return res.json({
    //             status:0,
    //             message:"user doesn't saved"
    //         });
    //     }
    // } 
}

module.exports={
    addUser
}
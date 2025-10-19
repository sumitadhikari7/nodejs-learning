const authorized = (req,res,next)=>{
    const {user} = req.query;
    if(user==='sumit'){
        req.user = {name:'sumit', id:7}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
    console.log('authorize')
next()
}
module.exports = authorized
const jwt=require('jsonwebtoken');
const auth= async (req,res,next)=>{
try {
    
const token= await req.header("Authorization")
if(!token){
    
    return res.status(400).json({msg:"Invalid Authentication bro"})
}
jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
if(err){
    return res.status(400).json({msg:"Invalid Authentication"})
}
req.user=user
next()
});
} catch (err) {
      return res.status(500).json({msg:err.message})
}
}
module.exports=auth;
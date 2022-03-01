var express = require('express');
var router = express.Router();
var Buyer=require('../models/buyerM');
var Seller=require('../models/sellerM');
var User=require('../models/userM');
var auth=require('../middlewares/auth')
const jwt=require('jsonwebtoken');
var configurer=require('../config')
var multer=require('multer');
var path=require('path')
var randomString = require('random-string');
//const config = require('../config');
const config=require('../config')

const client = require('twilio')(configurer.accountSID, configurer.authToken);
const Ad=require('../models/addsM');
const reviewM = require('../models/reviewM');
const Category=require('../models/categoryM')
const Message=require('../models/messages')
const testauth=require('../middlewares/testauth')
const subcategoryM=require('../models/subcategory');
const tagM=require('../models/tagsM');
const metaM=require('../models/metaM');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'hello' });
});
router.get('/sendotp',async(req,res,next)=>{
  
  const buyer=await User.findOne({phonenumber:"+"+req.query.phonenumber});
  if(buyer){
    return res.json({msg:"Phone number already exist"})
  }

  // return res.json({msg:"heheh"})
  
      client
      .verify
      .services(configurer.serviceID)
      .verifications
      .create({
          to: `+${req.query.phonenumber}`,
          channel: req.query.channel 
      })
      .then(data => {
          res.json({msg:"OTP sended"})
      })
  
  })
  router.post('/signup',function(req,res,next){
  
    client
    .verify
    .services(configurer.serviceID)
    .verificationChecks
    .create(
      {
        to:`+${req.query.phonenumber}`,
        code:req.query.code
      }
    )
    .then(data => {
        // if(Buyer.findOne({email:req.params.email})){
        //     res.json({msg:"Email already exists"});
        // }
      User.create(req.body)
      .then((teacher) => {
          console.log('user is authenticated');
          console.log('User has been Added and authenticated', teacher);

res.status(200).json({msg:"Signup completed Successfully"})


  }, (err) => next(err))
  .catch((err) => next(err));
}
    )})










router.post('/login',async function(req,res,next){

const user=await User.findOne({email:req.body.email});
if(user){
  if(user.password==req.body.password){
  process.env.accesstoken=randomString(10);




  const refresh_token = createRefreshToken({id: user._id})
  res.cookie('refreshtoken', refresh_token, {
      httpOnly: true,
      path: '/user/refresh_token',
      maxAge: 7*24*60*60*1000 // 7 days
  })

  res.json({msg: "Login success!",token:refresh_token})







  // res.status(200).json({msg:"Login Successfully",token:process.env.accesstoken,id:user._id })

}
  else{
    res.status(404).json({msg:"Incorrect Password"})
  }
}
else{
  res.status(404).json({msg:"user not found"})

}
})

router.get('/gettoken',function(req,res,next){

  




  try {
    const rf_token = req.header('token')
    if(!rf_token) return res.status(400).json({msg: "Please login now!"})

    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if(err) return res.status(400).json({msg: "Please login now!"})

        const access_token = createAccessToken({id: user.id})
        res.json({access_token})
    })
} catch (err) {
    return res.status(500).json({msg: err.message})
}
  
})
router.post('/logout',async (req,res,next)=>{

try{

  res.clearCookie('refreshtoken',{path:'/user/refresh_token'})
  return res.json({msg:"Logged Out Succesfully"})


}
catch(err){
  res.status(500).json(err.message)
}
})




router.get('/userinfo',testauth,async(req,res,next)=>{
  try{
const user=await User.findById(req.user.id).select('-password')
res.json(user)
  }
  catch(err){
    console.log(err.message)
    return res.status(500).json({msg:err.message})
  }
})

router.patch('/updateprofile',testauth,async(req,res,next)=>{
  console.log(req.body)
  await User.findOneAndUpdate({_id:req.user.id},req.body);
res.json({msg:"Profile Updated"})
});
router.patch('/updatepassword',testauth,async(req,res,next)=>{
  try{
  console.log(req.body)
  const user=await User.findById(req.user.id);
  if(req.body.oldpassword==user.password){
    await User.findOneAndUpdate({_id:req.user.id},{password:req.body.newpassword});
    res.json({msg:"Password Updated"})
  }
  else{
    res.status(404).json({msg:"old password is incorrect"})
  }

}
catch(err){
  console.log(err.message)
  return res.status(500).json({msg:err.message}) 
}
});




router.get('/ad/getpremium',async(req,res,next)=>{
  try{
  const add=await Ad.find({premium:true});
  res.json(add)
  }
  catch(err){
    res.status(500).json(err.message)
  
  }
  
  })
  
  router.get('/ad/getnonpremium',async(req,res,next)=>{
    try{
    const add=await Ad.find({premium:false});
    res.json(add)
    }
    catch(err){
      res.status(500).json(err.message)
    
    }
    
    })
    
  
  





router.post('/ad',testauth,async (req,res,next)=>{

  try{
  const newadd=await Ad.create(req.body);
  res.json({msg:"Ad is posted"})
  
  }
  catch(err){
    console.log(err.message)
    return res.status(500).json({msg:err.message}) 
  }
  
  })
  router.patch('/ad/:adid',testauth,async (req,res,next)=>{
  
    try{
    const newadd=await Ad.findOneAndUpdate({_id:req.params.adid},req.body);
    res.json({msg:"Ad is updated"})
    
    }
    catch(err){
      console.log(err.message)
      return res.status(500).json({msg:err.message}) 
    }
    
    })
    //set premium for ad
    router.patch('/setpremium/:adid',testauth,async (req,res,next)=>{
  
      try{
      const newadd=await Ad.findOneAndUpdate({_id:req.params.adid},req.body);
      res.json({msg:"Ad is in premium category now"})
      
      }
      catch(err){
        console.log(err.message)
        return res.status(500).json({msg:err.message}) 
      }
      
      })
  router.delete('/ad/:adid',testauth,async (req,res,next)=>{
  
  
  try{
  await Ad.deleteOne({_id:req.params.adid})
  res.status(202).json({msg:"Ad is deleted"})
  }
  catch(err){
    console.log(err.message)
        return res.status(500).json({msg:err.message}) 
  }
  
  })
  //get specific add 
  router.get('/ad/:adid',testauth,async(req,res,next)=>{
  
    try{
      const ad=await Ad.findOne({_id:req.params.adid})
      res.status(202).json(ad);
      }
      catch(err){
        console.log(err.message)
            return res.status(500).json({msg:err.message}) 
      }
  
  })
  
  
  
  
  //get by category
  router.get('/ad/category/:catname',testauth,async(req,res,next)=>{
  
    try{
      const ad=await Ad.find({category:req.params.catname});
      res.status(202).json(ad);
      }
      catch(err){
        console.log(err.message)
            return res.status(500).json({msg:err.message}) 
      }
  
  })

  
  //get by title
router.get('/ad/title/:tname',testauth,async(req,res,next)=>{
  
    try{
      const ad=await Ad.find({title:req.params.tname})
      res.status(202).json(ad);
      }
      catch(err){
        console.log(err.message)
            return res.status(500).json({msg:err.message}) 
      }
  
  })

  
  //get all adds posted by me
  router.get('/ad/useradd/:sid',testauth,async(req,res,next)=>{
  
    try{
      const ad=await Ad.find({sellerid:req.params.sid})
      res.status(202).json(ad);
      }
      catch(err){
        console.log(err.message)
            return res.status(500).json({msg:err.message}) 
      }
  
  
  })

//post a review
  router.post('/review/ad/:adid',testauth,async(req,res,next)=>{

    try{
    const review=await reviewM.create({name:req.body.name,adid:req.params.adid, reviewbody:req.body.reviewbody,rating:req.body.rating})
    res.json({msg:"Review Posted"})
    }
    catch(err){
      return res.status(500).json({msg:err.message})
    
    }
    
      })
      
    
















// Get all related reviews to an ad
router.get('/review/ad/:adid',testauth,async(req,res,next)=>{
try{
const reviews=await reviewM.find({adid:req.params.adid});
res.json(reviews)
}
catch(err){
  res.status(500).json(err.message)
}
})

//get All Reviews

router.get('/review',testauth,async(req,res,next)=>{
  try{
  const reviews=await reviewM.find({});
  res.json(reviews)
  }
  catch(err){
    res.status(500).json(err.message)
  }
  })

  router.get('/category',async(req,res,next)=>{
    try{
    const category=await Category.find({});
    res.json(category)
    }
    catch(err){
      res.status(500).json(err.message)
    }
    })
  





    router.post('/contactmessage',async(req,res,next)=>{

      try{
    
        const {senderemail,sendername,messbody}=req.body;
    
        const contactmess= new Message({senderemail,sendername,messbody});
        await contactmess.save();
        res.json({msg:"Contact Message sent"})
      }
    
      catch(err){
        return res.status(500).json({msg:err.message}) 
      }
    
    })

    router.get('/getseller/:id',async(req,res,next)=>{

      try{
        const user= await User.findById(req.params.id).select('-password');
        
        res.json({msg:user});
      }
    
      catch(err){
        return res.status(500).json({msg:err.message}) 
      }
    
    })
    router.get('/testlogin',testauth,async(req,res,next)=>{

res.json(

  {msg:"its working", user:req.user}
);

    })
    


    router.get('/subcategory/:id',async(req,res,next)=>{
      try {
          
      const newlocation=await subcategoryM.findById(req.params.id);
      res.json({meta:newlocation})
      
      } catch (err) {
          return res.status(500).json({msg:err.message}) 
      }
      
      })
  
      router.get('/subcategory',async(req,res,next)=>{
          try {
              
          const newlocation=await subcategoryM.find({});
          res.json({metalist:newlocation})
          
          } catch (err) {
              return res.status(500).json({msg:err.message}) 
          }
          
          })



//get sub catgeories by catgeory id
          router.get('/subcategory/:catid',async(req,res,next)=>{
              try {
                  
              const newlocation=await subcategoryM.find({categoryId:req.params.catid});
              res.json({metalist:newlocation})
              
              } catch (err) {
                  return res.status(500).json({msg:err.message}) 
              }
              
              })
  
              router.get('/tag/:id',async(req,res,next)=>{
                try {
                    
                const newlocation=await tagM.findById(req.params.id);
                res.json({meta:newlocation})
                
                } catch (err) {
                    return res.status(500).json({msg:err.message}) 
                }
                
                })
            
                router.get('/tag',async(req,res,next)=>{
                    try {
                        
                    const newlocation=await tagM.find({});
                    res.json({metalist:newlocation})
                    
                    } catch (err) {
                        return res.status(500).json({msg:err.message}) 
                    }
                    
                    })
        


                    router.get('/meta/:id',async(req,res,next)=>{
                      try {
                          
                      const newlocation=await metaM.findById(req.params.id);
                      res.json({meta:newlocation})
                      
                      } catch (err) {
                          return res.status(500).json({msg:err.message}) 
                      }
                      
                      })
                  
                      router.get('/meta',async(req,res,next)=>{
                          try {
                              
                          const newlocation=await metaM.find({});
                          res.json({metalist:newlocation})
                          
                          } catch (err) {
                              return res.status(500).json({msg:err.message}) 
                          }
                          
                          })
              



















    
    
    










    const createActivationToken = (payload) => {
      return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
  }
  
  const createAccessToken = (payload) => {
      return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
  }
  
  const createRefreshToken = (payload) => {
      return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
  }
  







module.exports = router;
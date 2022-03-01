var express = require('express');
var router = express.Router();
var Admin=require('../models/adminM')
var randomString = require('random-string');
var auth=require('../middlewares/testauth');
var Category=require('../models/categoryM')
var Message=require('../models/messages')
const User=require('../models/userM')
const Payment=require('../models/payments')
const Advertisement=require('../models/addsM');
const LocationM=require('../models/locationM')
const metaM=require('../models/metaM')
const jwt=require('jsonwebtoken');
const verifiedMessage = require('../models/verifiedMessage');
const tagM=require('../models/tagsM');
const subcategoryM=require('../models/subcategory');

router.post('/signup',async(req,res,next)=>{
try{
    const isfound=await Admin.findOne({email:req.body.email});
    if(isfound){
        return res.json({msg:"User already exists"});
    }else{
const admin=await Admin.create(req.body);
res.json(admin);}
}
catch(err){
    res.status(500).json({msg:err.message})
}
})

router.post('/login',async(req,res,next)=>{
    try{
const isfound=await Admin.findOne({email:req.body.email});
if(isfound){
    if(req.body.password==isfound.password){

        const refresh_token = createRefreshToken({id: isfound._id})
        res.cookie('refreshtoken', refresh_token, {
            httpOnly: true,
            path: '/user/refresh_token',
            maxAge: 7*24*60*60*1000 // 7 days
        })
      
        res.json({msg: "Login success!",token:refresh_token})
      

}
    else{
        return res.status(404).json({msg:"Password is incorrect"})
    }


    }
    else{
        return res.status(404).json({msg:"User not found"})
    }
}


    
    catch(err){
        res.status(500).json({msg:err.message})
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
  
  
















router.get('/getinfo/:id',async(req,res,next)=>{
try {
    const admin=await Admin.findById(req.params.id).select('-password');


    res.json(admin)

} catch (err) {
    res.status(500).json({msg:err.message})
}
})




router.patch('/updateprofile/:id',async(req,res,next)=>{
    console.log(req.body)
    await Admin.findOneAndUpdate({_id:req.params.id},req.body);
  res.json({msg:"Profile Updated"})
  });
  router.patch('/updatepassword/:id',async(req,res,next)=>{
    try{
    console.log(req.body)
    const admin=await Admin.findById(req.params.id);
    if(req.body.oldpassword==admin.password){
      await Admin.findOneAndUpdate({_id:req.params.id},{password:req.body.newpassword});
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

router.post('/category',async(req,res,next)=>{
    try {
        
const cat= await Category.create({name:req.body.name});

res.status(200).json({msg:"Category Posted"})


    } catch (err) {
        return res.status(500).json({msg:err.message})    
    }
})

router.get('/category',async(req,res,next)=>{
    try {
        
const cat= await Category.find({});

res.status(200).json({categories:cat})


    } catch (err) {
        return res.status(500).json({msg:err.message})    
    }
})




router.get('/category/:id',async(req,res,next)=>{
    try {
        
const cat= await Category.findById(req.params.id);

res.status(200).json({categories:cat})


    } catch (err) {
        return res.status(500).json({msg:err.message})    
    }
})



router.patch('/category/:id',async(req,res,next)=>{
    try {
        
const cat= await Category.findByIdAndUpdate(req.params.id,{name:req.body.category});

res.status(200).json({categories:cat, msg:"Updated"})


    } catch (err) {
        return res.status(500).json({msg:err.message})    
    }
})

router.delete('/category/:id',async(req,res,next)=>{
    try {
        
const cat= await Category.findByIdAndDelete(req.params.id);

res.status(200).json({msg:"Deleted"})


    } catch (err) {
        return res.status(500).json({msg:err.message})    
    }
})






router.get('/contactmessage',async(req,res,next)=>{
    try {
        
const messages= await Message.find({});

res.status(200).json(messages)


    } catch (err) {
        return res.status(500).json({msg:err.message})    
    }
})
router.get('/users',async(req,res,next)=>{
    try {
        
const users= await User.find({premium:false}).select('-password');

res.status(200).json(users)


    } catch (err) {
        return res.status(500).json({msg:err.message})    
    }
})

router.get('/payments',async(req,res,next)=>{
    try {
        
const payments= await Payment.find({});

res.status(200).json(payments)


    } catch (err) {
        return res.status(500).json({msg:err.message})    
    }
})



router.patch('/verifypremium/:uid',async(req,res,next)=>{
    try {
        
const user= await User.findOneAndUpdate({_id:req.params.uid},{premium:true,premiumdate:Date.now()});
console.log(user)

res.status(200).json({msg:'Premium set'})


    } catch (err) {
        return res.status(500).json({msg:err.message})    
    }
})

router.get('/getlistings',async(req,res,next)=>{

    try {
        
        const listings= await Advertisement.find({premium:false}).populate('sellerid','-password');
        
        res.status(200).json(listings)
        
        
            } catch (err) {
                return res.status(500).json({msg:err.message})    
            }

})

router.get('/getfeaturelistings',async(req,res,next)=>{

    try {
        
        const listings= await Advertisement.find({premium:true}).populate('sellerid','-password');
        
        res.status(200).json(listings)
        
        
            } catch (err) {
                return res.status(500).json({msg:err.message})    
            }

})

router.get('/getpremiumusers',async(req,res,next)=>{
    try {
        
const users= await User.find({premium:true}).select('-password');

res.status(200).json(users)


    } catch (err) {
        return res.status(500).json({msg:err.message})    
    }
})

router.get('/getanalytics',async(req,res,next)=>{
    try {
        
const users= await User.find().select('-password');
const premiumusers= await User.find({premium:true}).select('-password');
const payemntstotal=await Payment.find({})
res.status(200).json({totalusers:users.length,
    totalpremiumusers:premiumusers.length,
     totalpayment:(payemntstotal.length*25)})


    } catch (err) {
        return res.status(500).json({msg:err.message})    
    }
})
router.patch('/setpremiumadd/:id',async(req,res,next)=>{

try {
    const adset=await Advertisement.findByIdAndUpdate(req.params.id,{premium:true});
    res.json({msg:'Add is premium Now',newad:adset})

} catch (err) {
    return res.status(500).json({msg:err.message}) 
}

})
  

router.post('/location',async(req,res,next)=>{
try {
    
const newlocation=await LocationM.create({name:req.body.name});
res.json({msg:"Location is Added"})

} catch (err) {
    return res.status(500).json({msg:err.message}) 
}

})

router.patch('/location/:id',async(req,res,next)=>{
    try {
        
    const newlocation=await LocationM.findByIdAndUpdate(req.params.id,{name:req.body.name});
    res.json({msg:"Location is Updated"})
    
    } catch (err) {
        return res.status(500).json({msg:err.message}) 
    }
    
    })
    
router.delete('/location/:id',async(req,res,next)=>{
    try {
        
    const newlocation=await LocationM.findByIdAndDelete(req.params.id);
    res.json({msg:"Location is deleted"})
    
    } catch (err) {
        return res.status(500).json({msg:err.message}) 
    }
    
    })
    
    router.get('/location/:id',async(req,res,next)=>{
        try {
            
        const newlocation=await LocationM.findById(req.params.id);
        res.json({locations:newlocation})
        
        } catch (err) {
            return res.status(500).json({msg:err.message}) 
        }
        
        })
    
        router.get('/location',async(req,res,next)=>{
            try {
                
            const newlocation=await LocationM.find({});
            res.json({locations:newlocation})
            
            } catch (err) {
                return res.status(500).json({msg:err.message}) 
            }
            
            })
        



            router.post('/meta',async(req,res,next)=>{
                try {
                    
                const newlocation=await metaM.create({name:req.body.name});
                res.json({msg:"Meta is Added"})
                
                } catch (err) {
                    return res.status(500).json({msg:err.message}) 
                }
                
                })
                
                router.patch('/meta/:id',async(req,res,next)=>{
                    try {
                        
                    const newlocation=await metaM.findByIdAndUpdate(req.params.id,{name:req.body.name});
                    res.json({msg:"Meta is Updated"})
                    
                    } catch (err) {
                        return res.status(500).json({msg:err.message}) 
                    }
                    
                    })
                    
                router.delete('/meta/:id',async(req,res,next)=>{
                    try {
                        
                    const newlocation=await metaM.findByIdAndDelete(req.params.id);
                    res.json({msg:"Meta is deleted"})
                    
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
                



                            router.get('/testlogin',auth,async(req,res,next)=>{

                                res.json(
                                
                                  {msg:"its working", user:req.user}
                                );
                                
                                    })
                                    
                                router.get('/getverifyrequest',async(req,res,next)=>{
                                    try{
const allerquests=await verifiedMessage.find({}).populate('senderid','-password').sort('-createdAt');
res.json(allerquests)

                                    }
                                    catch(err){
                                        res.json({msg:err.message})
                                    }

                                })

router.patch('/verifyrequest/:id',async(req,res,next)=>{
    try{
        const allerquests=await User.findByIdAndUpdate(req.params.id,{verified:true})
        res.json({msg:"User is not verified"})
        
                                            }
                                            catch(err){
                                              

                                                res.json({msg:err.message})

}
}
)
                                
                                
                                    
                                    
                                    
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                    const createActivationToken = (payload) => {
                                      return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
                                  }
                                  
                                  const createAccessToken = (payload) => {
                                      return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
                                  }
                                  
                                  const createRefreshToken = (payload) => {
                                      return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
                                  }
                                  
                                





                                  router.post('/tag',async(req,res,next)=>{
                                    try {
                                        
                                    const newlocation=await tagM.create({name:req.body.name});
                                    res.json({msg:"Tag is Added"})
                                    
                                    } catch (err) {
                                        return res.status(500).json({msg:err.message}) 
                                    }
                                    
                                    })
                                    
                                    router.patch('/tag/:id',async(req,res,next)=>{
                                        try {
                                            
                                        const newlocation=await tagM.findByIdAndUpdate(req.params.id,{name:req.body.name});
                                        res.json({msg:"Tag is Updated"})
                                        
                                        } catch (err) {
                                            return res.status(500).json({msg:err.message}) 
                                        }
                                        
                                        })
                                        
                                    router.delete('/tag/:id',async(req,res,next)=>{
                                        try {
                                            
                                        const newlocation=await tagM.findByIdAndDelete(req.params.id);
                                        res.json({msg:"Tag is deleted"})
                                        
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
                                    
                    



                                                router.post('/subcategory',async(req,res,next)=>{
                                                    try {
                                                        
                                                    const newlocation=await subcategoryM.create(req.body);
                                                    res.json({msg:"Sub Category is Added"})
                                                    
                                                    } catch (err) {
                                                        return res.status(500).json({msg:err.message}) 
                                                    }
                                                    
                                                    })
                                                    
                                                    router.patch('/subcategory/:id',async(req,res,next)=>{
                                                        try {
                                                            
                                                        const newlocation=await subcategoryM.findByIdAndUpdate(req.params.id,{name:req.body.name});
                                                        res.json({msg:"Sub category is Updated"})
                                                        
                                                        } catch (err) {
                                                            return res.status(500).json({msg:err.message}) 
                                                        }
                                                        
                                                        })
                                                        
                                                    router.delete('/subcategory/:id',async(req,res,next)=>{
                                                        try {
                                                            
                                                        const newlocation=await subcategoryM.findByIdAndDelete(req.params.id);
                                                        res.json({msg:"Sub catgeory is deleted"})
                                                        
                                                        } catch (err) {
                                                            return res.status(500).json({msg:err.message}) 
                                                        }
                                                        
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
                                                        
                    
    
                                                    












module.exports = router;
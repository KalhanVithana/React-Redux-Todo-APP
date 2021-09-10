express = require('express'),
router = express.Router();
let UserSchema = require('../model/User')

router.route('/add').post((req, res, next) => {
    UserSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });


  router.route('/get').get(async(req,res)=>{

    await UserSchema.find((err,data)=>{
        if(err){
            res.json(err)
        }else{
           
             res.json(data)
        }
    })

  })




  
  router.route('/up/:id').put(async(req,res)=>{


    const {name,email,password} =req.body

    let UserData = UserSchema({
      name,
      email,
      password
    })

    await UserSchema.findByIdAndUpdate(req.params.id,{
      set:{
        name,email,password
      }
    },(err,data)=>{

      if (err) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
      
      }
    })
      
  })


  router.route('/upd/:id').put(async(req,res)=>{


    const {name,email,password} =req.body

    let UserData = UserSchema({
      name,
      email,
      password
    })


    await UserSchema.findByIdAndUpdate(req.params.id,{
      $set:{
        name,email,password
        
    }
  },(error,data)=>{
    if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
      
      }
  })
    


})

  router.route('/update/:id').put(async(req,res)=>{


    const {name,email,password} =req.body

    let UserData = UserSchema({
      name,
      email,
      password
    })

   await UserSchema.findByIdAndUpdate(req.params.id,{
      $set:{
        name,email,password
        
    }
  },(error,data)=>{
    if (error) {
        
        console.log(error)
      } else {
        res.json(data)
        console.log(data)
    
      }
  })
    


})



router.route('/edit/:id').get(async(req,res)=>{



  await UserSchema.findById(req.params.id,(error,data)=>{

    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)

      console.log(data)
    
    }
  })
})

  

  


  
module.exports = router;

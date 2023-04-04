const userModel = require('../models/userSchema')

// ==============CreateUser=============
exports.createUser = async (req, res) => {
    try {
      const { name, email, age  } = req.body;
      //validation
      if (!name || !email || !age) {
        return res.status(400).send({
          success: false,
          message: "Please Fill all fields",
        });
      }
      //exisiting user
      const exisitingUser = await userModel.findOne({ email });
      if (exisitingUser) {
        return res.status(401).send({
          success: false,
          message: "user already exisits",
        });
      }
      //save new user
      const user = new userModel({name, email, age });
      await user.save();
      return res.status(201).send({
        success: true,
        message: "New User Created",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "Error In Create User callback",
        success: false,
        error,
      });
    }
  };

// ==============FindUser=============
 exports.findUser = async(req,res)=>{
    try {
        const getdata = await userModel.find({});
        res.send(getdata); 
    } catch (error) {
        res.status(404).send(error);
    }   
}

// ==============findUserById=============
exports.findUserById =async(req,res)=>{
    try {
        const id =req.params.id;
        const getiddata =await userModel.findById({_id:id})
        res.send(getiddata);
    } catch (error) {
        res.status(404).send(error);
    }    
}

// ==============findUserByIdandUpdate=============
exports.findUserByIdandUpdate = async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedata = await userModel.findByIdAndUpdate({_id:id},req.body,{new:true})
        res.send(updatedata) 
    } catch (error) {
        res.status(500).send(error);
    }
}

// ==============findUserByIdandDelete=============
exports.findUserByIdandDelete = async(req,res)=>{
    try {
        const id = req.params.id;
        const deletedata = await userModel.findByIdAndDelete({_id:id})
        res.send(deletedata);
    } catch (error) {
        res.status(500).send(error);
    }
}

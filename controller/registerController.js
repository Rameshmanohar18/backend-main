const Userschema = require('../models/userschema');
const bcrypt=require('bcrypt')

/* GET users listing. */

exports.handleregister= async (req, res) => {
  // console.log(req.body);
  const { Name, email, password } = req.body;
  const hasgPwd=await bcrypt.hash(password,10)
  
  try {
    const exists = await Userschema.findOne({ email: email });
    if (exists) {
      return res.status(400).json({message:'Email is already registered!'});
    }

    let userlist = {
      Name,
      email,
      password:hasgPwd,
      
    }

    await Userschema.create(userlist);
    res.status(200).json({ msg: 'Register successfully'});
    console.log('Data added to the DB');
    
  } 
  catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
};



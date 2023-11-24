// var jwt=require('jsonwebtoken');
const Userschema = require('../models/userschema');
const bcrypt = require('bcrypt')


exports.handlelogin = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body
    const Loginexists = await Userschema.findOne({ email: email })
    try {
        //      console.log(Loginexists);
        if (!Loginexists) {
            return res.status(401).json({ message: 'Invalid email' });
        }
        else {
            const decodedPwd = await bcrypt.compare(password, Loginexists.password)
            if (decodedPwd) {

                return res.status(200).json({
                    message: 'Login sucesssfully'

                });
            } else {
                return res.status(401).json({ message: "Invalid Password" })
            }

        }
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send('network error');
    }

}

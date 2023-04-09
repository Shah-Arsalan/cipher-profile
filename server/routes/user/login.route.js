const { UserModel } = require("../../models/user.model")
const {Router} = require("express")
const bcrypt = require("bcryptjs");

const LoginRoute = Router()

LoginRoute.get("/",async (req, res) => {
    const data = await UserModel.find({})
    res.send(data);
})
LoginRoute.post("/", async(req,res)=>{
    const { email, password } = req.body
    const user = await UserModel.findOne({ email: email })
    const fname = user.fname;
    const lname = user.lname;
    const mobile = user.mobile;
    const pic = user.pic;
    if (user) {
        const hash = user.password
        bcrypt.compare(password, hash, function (err, result) {
            if (err) {
                console.log(err)
                res.send(500)
                res.send({ msg: "Something went wrong" })
            }
            if (result) {

                //res.status(200)
                res.status(200).send({ msg: "Login Successfull", fname, lname, mobile, pic, email, password })

            } else {
                res.status(401).send({ msg: "Authentication failed" })
            }
        });

    } else {
        res.status(401).send({ msg: "Authentication failed" })
    }
})

module.exports = {
    LoginRoute
}
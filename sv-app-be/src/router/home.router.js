const experss = require('express');
const router = experss.Router();

const AuthsRouter = require("./auth.router");
router.use("/auth", AuthsRouter);

const AdminsRouter = require("./admin.router");
router.use("/admin", AdminsRouter);

router.get('/hello',function(req,res){
    res.send("Hello cac ban");
})

module.exports = router;
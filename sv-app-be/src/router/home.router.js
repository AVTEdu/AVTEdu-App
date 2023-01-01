const experss = require('express');
const router = experss.Router();

router.get('/hello',function(req,res){
    res.send("Hello cac ban");
})

module.exports = router;
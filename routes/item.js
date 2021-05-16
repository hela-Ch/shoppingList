const express = require ("express");
const router = express.Router();

const Item = require("../modules/Item");



router.get('/', (req, res) => {
    Item.find()
    .then((items) => {
        console.log("hi from get methood");
        res.send(items)})
    .catch((error) => res.status(404).json({success:false}))  
});

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
    })
    newItem.save()
    .then((item) => {
        console.log("hello from post method");
        res.send(item)})
    .catch((error) => res.status(404).json({success:false}))   
})
router.delete('/:id', (req,res) => {
    Item.findById(req.params.id)
    .then((deleteditem ) => deleteditem.remove().then((Item) => res.send(Item)))
    .catch((error) => res.status(404).json({success:false}))
})





module.exports = router;




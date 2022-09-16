const express = require("express");
const router = express.Router();
const Form = require("../models/formModel");

router.route("/").post((req, res) => {
    const name = req.body.name;
    const seedName = req.body.seedName;
    const quality = req.body.quality;
    const add = req.body.add;
    const category = req.body.category;
    const selectedFile = req.body.selectedFile;
    const newDetail = new Form({
        name,
        seedName,
        quality,
        add,
        category,
        selectedFile
    });

    newDetail.save()
});

router.route("/details").get((req,res) =>{
    Form.find().then(foundDetails => res.json(foundDetails))
})
module.exports = router;
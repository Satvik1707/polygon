const mongoose = require("mongoose");

const formSchema = {
    name: String,
    seedName: String,
    quality: String,
    add: String,
    category: String,
    selectedFile: String
}

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
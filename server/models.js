const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors1', {useNewUrlParser:true})
  .catch(err => console.log(err));

const AuthorSchema = new mongoose.Schema({
    name: {
      type: String, 
      default: ""
    },
}, {timestamps:true});

module.exports = mongoose.model('Author', AuthorSchema); 

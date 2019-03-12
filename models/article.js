var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Articleschema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    default: "summary not available"
  },
  img: {
    type: String
    // default: "/assets/images/unavailable.jpg"
  },
  issaved: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    default: "save article"
  },
  created: {
    type: Date,
    default: Date.now
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "note"
  }
});

Articleschema.index({ title: "text" });

var article = mongoose.model("article", Articleschema);
module.exports = article;

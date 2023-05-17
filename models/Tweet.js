const { mongoose, Schema } = require("../db");

// Crear esquema y modelo User...
const tweetSchema = new Schema({
  content: {
    type: String,
    maxlength: 140,
  },
  likes: Number,
  date: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  companyWebsite: {
    type: String,
  },
  companyAddress: {
    type: String,
  },
  companySlogan: {
    type: String,
  },
  profilePhoto: {
    type: String,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);

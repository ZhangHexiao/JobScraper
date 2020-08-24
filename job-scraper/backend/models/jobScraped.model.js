const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jobScrapedSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    company: String,
    location: String,
    remoteOrOffice: String,
    compensation: String,
    requirement: String,
    summary: String,
    postTime: String
}, {
  timestamps: true,
});

const JobScraped = mongoose.model('JobScraped', jobScrapedSchema);

module.exports = JobScraped;
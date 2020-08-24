const router = require('express').Router();
let JobScraped = require('../models/jobScraped.model');

router.route('/').get((req, res) => {
    JobScraped.find()
    .then(jobScrapeds => res.json(jobScrapeds))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
//   const description = req.body.description;
//   const duration = Number(req.body.duration);
//   const date = Date.parse(req.body.date);
  const newJob = new JobScraped({title});
  newJob.save()
  .then(() => res.json('Job added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router
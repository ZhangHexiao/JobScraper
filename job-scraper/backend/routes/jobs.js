const router = require('express').Router();
let JobScraped = require('../models/jobScraped.model');

router.route('/').get((req, res) => {
    JobScraped.find({hided : false})
    .then(jobScrapeds => res.json(jobScrapeds))
    .catch(err => res.status(400).json('Error: ' + err));
});
//************************************************* */
// Add a new job information, only title is required
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const company = req.body.company;
  const location = req.body.location;
  const remoteOrOffice = req.body.remoteOrOffice;
  const compensation = req.body.compensation;
  const requirement = req.body.requirement;
  const summary = req.body.summary;
  const postTime = req.body.postTime;

  const newJob = new JobScraped({title, company, location, remoteOrOffice, compensation, requirement, summary, postTime});
  newJob.save()
  .then(() => res.json('Job added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
//************************************************* */
// Get one job information
router.route('/:id').get((req, res) => {
  JobScraped.findById(req.params.id)
    .then(jobScraped => res.json(jobScraped))
    .catch(err => res.status(400).json('Error: ' + err));
});
//************************************************* */
// Delete a job information, change hidden to true, soft delete
router.route('/:id').delete((req, res) => {
  JobScraped.findById(req.params.id)
  .then(jobScraped=> {
    jobScraped.hided = true;
    jobScraped.save()
      .then(() => res.json('job deleted!'))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
});
//***************************************************/
// Update a job information
router.route('/update/:id').post((req, res) => {
  JobScraped.findById(req.params.id)
    .then(jobScraped=> {  
      jobScraped.title = req.body.title;
      jobScraped.company = req.body.company;
      jobScraped.location  = req.body.location;
      jobScraped.remoteOrOffice  = req.body.remoteOrOffice;
      jobScraped.compensation  = req.body.compensation;
      jobScraped.requirement  = req.body.requirement;
      jobScraped.summary  = req.body.summary;
      jobScraped.postTime  = req.body.postTime;
      jobScraped.personalTag  = req.body.personalTag;
      jobScraped.save()
        .then(() => res.json('job update!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
//***************************************************/
// add a personal tag information
router.route('/addTag/:id').post((req, res) => {
  JobScraped.findById(req.params.id)
    .then(jobScraped=> {  
      jobScraped.tag = req.body.tag;
      jobScraped.save()
        .then(() => res.json('job update tag!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
//***************************************************/
router.route('/search/:keyword').get((req, res) => {
  JobScraped.find(
    { $or: [{title: new RegExp(req.params.keyword, "i")}, 
            {company: new RegExp(req.params.keyword, "i")},
            {location: new RegExp(req.params.keyword, "i")},
            {requirement: new RegExp(req.params.keyword, "i")},
            {remoteOrOffice: new RegExp(req.params.keyword, "i")},
            {postTime: new RegExp(req.params.keyword, "i")}]}
  )
  .then(jobScrapeds => res.json(jobScrapeds))
  .catch(err => res.status(400).json('Error: ' + err));
});
//***************************************************/
module.exports = router
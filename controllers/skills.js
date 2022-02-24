import * as skillDb from '../data/skill-db.js'

function index(req, res) {
  skillDb.find({}, (error, skills) => {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
}

function show(req, res) {
  skillDb.findById(req.params.id, (error, skill) => {
    res.render('skills/show', {
      skill: skill,
      error: error
    })
  })
}

export {
  index,
  show
}
import * as skillDb from '../data/skill-db.js'

function index(req, res) {
  skillDb.find({}, (error, skills) => {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
}

function newSkill(req, res){
  res.render('skills/new')
}

function show(req, res) {
  skillDb.findById(req.params.id, (error, skill) => {
    res.render('skills/show', {
      skill: skill,
      error: error
    })
  })
}

function create(req, res){
  console.log(req.body)
  skillDb.create(req.body, (error, skill) => {
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  show,
  create
}
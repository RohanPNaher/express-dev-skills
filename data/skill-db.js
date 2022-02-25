const skills = [
  {
    text: 'Manipulate the DOM',
    acquired: true,
    _id: 11111
  },
  {
    text: 'Brew coffee with a French Press',
    acquired: true,
    _id: 22222
  },
  {
    text: 'Memorize the Chart',
    acquired: false,
    _id: 33333
  },
  {
    text: 'Know keyboard shortcut',
    acquired: true,
    _id: 44444
  },
  {
    text: 'Teach shrimp JavaScript',
    acquired: false,
    _id: 55555
  },
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)) {
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, skills)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) => {
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('This skill was not found.')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    callback(error, null)
  }
}

function create(skill, callback) {
  skill._id = Date.now() % 1000000
  skill.acquired = false
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try {
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedskill = skills.splice(idx, 1)
    if (!deletedskill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedskill[0])
  } catch(error) {
    return callback(error, null)
  }
}

export {
  find,
  findById,
  create,
  findByIdAndDelete,
}
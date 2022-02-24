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

export {
  find
}
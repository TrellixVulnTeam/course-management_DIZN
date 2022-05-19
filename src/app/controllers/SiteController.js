const Course = require('../models/Course')
const {multipleMongoose} = require('../../utils/mongoose')

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render('home', {
          courses: multipleMongoose(courses)
        })
      })
      .catch(next)
  }

  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();

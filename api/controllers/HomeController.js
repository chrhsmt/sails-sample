/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `HomeController.index()`
   */
  index: function (req, res) {
    // return res.json({
    //   todo: 'index() is not implemented yet!'
    // });
        // res.view({hello: 'hello, sails!!'});
        res.view();
  },

  users: function(req, res) {
    User.find({}, function(err, users) {
      res.view({users: users});
    });
  }
};


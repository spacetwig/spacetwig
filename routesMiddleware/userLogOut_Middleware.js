module.exports = {
  logOut(req, res, next) {
    req.logout();
    req.flash('success_msg', 'you logged out');
    res.redirect('/');
  }
};

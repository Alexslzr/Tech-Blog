const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  console.log('uwu')
  console.log(req.session.logged_in)
  if (!req.session.logged_in) {
    console.log('notuwu')
    res.redirect('/login');
  } else {
    console.log('uwu')
    next();
  }
};

module.exports = withAuth;

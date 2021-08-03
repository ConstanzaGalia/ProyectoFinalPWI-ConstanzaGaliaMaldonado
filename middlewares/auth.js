const verifyUser = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.render('login', {message: 'Iniciá sesión para ingresar'});
  }
}

const verifyAdmin = (req, res, next) => {
  if (req.session.admin === 1) {
    next();
  } else {
    res.render('unauthorized');
  }
}


module.exports = {verifyUser, verifyAdmin}
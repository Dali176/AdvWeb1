exports.homePage = (req, res, next) => {
  res.render('index', { 
    title: 'Home Page',
    message: 'Welcome to the dankest page on the interwebs', 
  });
};
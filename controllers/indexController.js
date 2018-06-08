exports.homePage = (req, res, next) {
  res.render('index', { 
    title: 'Test 1',
    message: 'henlo', 
  });
};
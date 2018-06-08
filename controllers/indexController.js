exports.homePage = (req, res, next) => {
  res.render('index', { 
    title: 'Home Page',
    message: 'Welcome to the dankest page on the interwebs', 
  });
};

exports.about = (req, res, next) => {
  res.render('about', { 
    title: 'About',
    message: 'Welcome to the dankest page on the interwebs', 
  });
};

exports.contact = (req, res, next) => {
  res.render('contact', { 
    title: 'Contact Me',
    message: 'Welcome to the dankest page on the interwebs', 
  });
};

exports.services = (req, res, next) => {
  res.render('services', { 
    title: 'Services',
    message: 'Welcome to the dankest page on the interwebs', 
  });
};

exports.projects = (req, res, next) => {
  res.render('projects', { 
    title: 'Projects',
    message: 'Welcome to the dankest page on the interwebs', 
  });
};
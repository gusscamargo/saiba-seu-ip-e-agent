controller = Object()

controller.all = (req, res, next) => {
  res.render('index', { 
    title: 'Descobrir seu UserAgent e IP',
    userAgent: req.get("User-Agent"),
    userIp: req.ip
  });
}

module.export = controller
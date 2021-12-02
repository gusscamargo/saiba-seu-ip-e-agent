controller = new Object()

controller.index = (req, res, next) => {
  return res.render('index', { 
    title: 'Descobrir seu UserAgent e IP',
    userAgent: req.get("User-Agent"),
    userIp: req.ip
  });
}

module.export = controller
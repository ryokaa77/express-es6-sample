import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<!doctype html>\n<html>\n<head><title>Express</title></head>\n<body>\n  <h1>Express</h1>\n  <p>My Student ID is 21849349.</p>\n  <p>Welcome to Express</p>\n</body>\n</html>');
});

export default router;

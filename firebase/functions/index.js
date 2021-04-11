/**
 *
 */
'use strict';

const functions = require('firebase-functions');
const app = require('express')();

const contact = require('./api/contact');


app.get('/test', function(req, res) {
  return res.json('OK');
});

app.post('/contactmail', function(req, res) {
  return contact.sendContactMail(req, res);
});

app.post('/appoinmentmail', function(req, res) {
  return contact.sendAppoinmentMail(req, res);
});

exports.api = functions.https.onRequest(app);
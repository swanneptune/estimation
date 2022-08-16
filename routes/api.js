require('dotenv').config();
const n = require('nested-knex');

const db = require('../lib/db');

const express = require('express');
const router = express.Router();

router.post('/login', async function(req, res, next) {
  try {
    const data = req.body;
    if(!data) throw new Error('No payload');

    const user = await n.type({
      id: n.number('users.id', { id: true }),
      userName: n.string('users.user_name'),
      password: n.string('users.password'),
    }).withQuery(
      db('users').where('user_name', data.userName)
    );

    if (!user) {
      return res.json({ message: 'NO_USER_FOUND' });
    }
    if (user.password != data.password) {
      return res.json({ message: 'PASSWORD_NOT_MATCH' });
    }

    res.cookie('auth_sec', process.env.ADMIN_SECRET, { maxAge: 365*24*60*60*1000, httpOnly: true, path: '/' });

    res.redirect('/admin')
  } catch (e) {
    next(e)
  }
});

module.exports = router;
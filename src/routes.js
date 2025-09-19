const express = require('express');
const pool = require('./db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Hello from Node.js! DB time is: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send('Database error');
  }
});

module.exports = router;

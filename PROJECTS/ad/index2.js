const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'ad2',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get('/search', async (req, res) => {
  const { areaName } = req.query;
  if (!areaName) {
    return res.status(400).json({ error: 'Area name is required' });
  }

  try {
    const [rows] = await pool.query('SELECT * FROM 42_cases_under_crime_against_women WHERE area_name = ?', [areaName]);
    res.json(rows);
  } catch (error) {
    console.error('Error executing SQL query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

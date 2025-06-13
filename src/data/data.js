const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

let users = [];

// Load users from data.json on startup
try {
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  users = JSON.parse(data).users || [];
} catch (error) {
  console.error('Error loading data.json:', error.message);
  users = [];
}

const saveUsers = () => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ users }, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving data.json:', error.message);
  }
};

const JWT_SECRET = 'movies_secret';

module.exports = {
  users,
  JWT_SECRET,
  saveUsers,
};


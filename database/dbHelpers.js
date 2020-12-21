const pool = require('./index.js');

module.exports = {
  getUserUsername: (name, callback) => {
    let queryStr = `SELECT * FROM users WHERE username='${name}'`;
    pool.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },
  getUserEmail: (email, callback) => {
    let queryStr = `SELECT * FROM users WHERE email='${email}'`;
    pool.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  signUpUser: (userInfo, callback) => {
    let numMonth = parseInt(userInfo.month);
    let numDay = parseInt(userInfo.day);
    let numYear = parseInt(userInfo.year);
    let queryStr = `INSERT INTO users(username, firstname, lastname, email, password, month, day, year)
      VALUES (
        '${userInfo.username}',
        '${userInfo.firstname}',
        '${userInfo.lastname}',
        '${userInfo.email}',
        '${userInfo.password}',
        ${numMonth},
        ${numDay},
        ${numYear}
      )`;
    pool.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
}
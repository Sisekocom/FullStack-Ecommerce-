import { connection as db } from "../config/index.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/AuthenticateUser.js";

class Users {
  fetchUsers(req, res) {
    const qry = `
      SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, userPass 
      FROM users;
    `;
    db.query(qry, (err, results) => {
      if (err) {
        res.status(500).json({
          status: res.statusCode,
          msg: "Failed to retrieve users",
        });
      } else {
        res.json({
          status: res.statusCode,
          results,
        });
      }
    });
  }

  fetchUser(req, res) {
    const qry = `
      SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, userPass 
      FROM users
      WHERE userID = ?;
    `;
    db.query(qry, [req.params.id], (err, result) => {
      if (err) {
        res.status(500).json({
          status: res.statusCode,
          msg: "Failed to retrieve a user",
        });
      } else {
        res.json({
          status: res.statusCode,
          result,
        });
      }
    });
  }
  async createUser(req, res) {
    try {
      let data = req.body;
      data.userPass = await hash(data?.userPass, 8);
      const user = {
        emailAdd: data.emailAdd,
        userPass: data.userPass
      };
      const qry = `INSERT INTO users SET ?;`;
      db.query(qry, [data], (err) => {
        if (err) {
          res.status(400).json({
            status: res.statusCode,
            msg: err,
          });
        } else {
          let token = createToken(user);
          res.json({
            status: res.statusCode,
            token,
            msg: "You're registered",
          });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: res.statusCode,
        msg: "Internal Server Error",
      });
    }
  }

  async updateUser(req, res) {
    const data = { ...req.body };
    if (data?.userPass) {
      data.userPass = await hash(data.userPass, 8);
    }
    const qry = `
      UPDATE users
      SET ?
      WHERE userID = ?;
    `;
    db.query(qry, [data, req.params.id], (err) => {
      if (err) {
        res.status(500).json({
          status: res.statusCode,
          msg: "Failed to update a user",
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "The user information is updated.",
        });
      }
    });
  }

  deleteUser(req, res) {
    const qry = `
      DELETE FROM users WHERE userID=${req.params.id};
    `;
    db.query(qry, (err) => {
      if (err) {
        res.status(500).json({
          status: res.statusCode,
          msg: "Failed to delete a user.",
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "The user information has been removed.",
        });
      }
    });
  }

  login(req, res) {
    const { emailAdd, userPass } = req.body;
    const qry = `
      SELECT userID, firstName, lastName, userAge, gender, emailAdd, userPass, userRole
      FROM users
      WHERE emailAdd = ?;
    `;
    db.query(qry, [emailAdd], async (err, result) => {
      if (err) {
        res.status(500).json({
          status: res.statusCode,
          msg: "Internal Server Error",
        });
      } else {
        if (!result?.length) {
          res.status(401).json({
            status: res.statusCode,
            msg: "You provided a wrong email address.",
          });
        } else {
          const validPass = await compare(userPass, result[0].userPass);
          if (validPass) {
            const token = createToken({
              emailAdd,
              userPass,
            });
            res.json({
              status: res.statusCode,
              msg: "You're logged in",
              token,
              result: result[0],
            });
          } else {
            res.status(401).json({
              status: res.statusCode,
              msg: "Please provide the correct password.",
            });
          }
        }
      }
    });
  }
      }
      
    
  

export { Users };

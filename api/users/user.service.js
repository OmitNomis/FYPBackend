const pool = require("../../config/database");

module.exports = {
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from user where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select userID,firstName,lastName,email,phone,city, countryID, profileImage, startDate from user where userId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByPhone: (phone, callBack) => {
    pool.query(
      `select userID,firstName,lastName,email,phone,city, countryID, profileImage, startDate from user where phone = ?`,
      [phone],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(
      `select userId,firstName,lastName,email,phone,city, countryId from user`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update user set firstName=?, lastName=?, email=?, city=?, profileImage = ? where userID = ?`,
      [
        data.FirstName,
        data.LastName,
        data.Email,
        data.City,
        data.ProfileImage,
        data.UserId,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from user where userID = ?`,
      [data.UserId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

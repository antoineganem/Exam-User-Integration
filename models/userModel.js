// Este archivo contiene todas las queries a la BD
const { db } = require('../config/db');

const getAllUsers = async () => {
  const query = 'SELECT * FROM users ORDER BY id ASC;';
  const { rows } = await db.query(query);
  return rows;
};

const getUserById= async (id) => { 
  const query = 'Select * FROM users WHERE id = $1;';
  const { rows } = await db.query(query, [id] );
  return rows[0];
}

const createUser = async (user) => { // funciones asincronicas debido a las llamadas a la base de datos. 

  try{
    const query = 'INSERT INTO users (name, email, age, sex, tag, direction) VALUES ($1, $2, $3, $4 ,$5, $6) RETURNING *;';
    const response = await db.query(query,[user.name, user.email, user.age, user.sex, user.tag, user.direction]);
    console.log(response);
    return response.rows[0];
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

const updateUser = async (id,user) => {
  try {
    const query = 'UPDATE users SET name = $1,email = $2 WHERE id = $3 RETURNING *;';
    const { rows } = await db.query(query, [users.name, user.email, id]);
    return rows[0];
  } catch (error) {
    console.log(error)
  }
}
module.exports = { getAllUsers,getUserById,createUser,updateUser };

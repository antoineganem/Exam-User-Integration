// Este archivo obtiene toda la informacion de nuestros modelos (queries) y las funciones nos retorna el request
const UserModel = require('../models/userModel');

async function getAllUsers(req, res) {
    try {
        const users = await UserModel.getAllUsers();
        res.json(users);
    } catch (error) {
        console.log(error)
       res.status(500).send(error); 
    }
}

async function getUserById(req, res) {
    const { id } = req.params;

    console.log(id);
    try {
        const user = await UserModel.getUserById(id);
        res.json(user);
    } catch(error){
        res.status(500).send(error);
    }
}

async function createUser(req, res){ // funciones asincronas que reciben como parametros un request un responds del servidor 
    
    try {
        const userData = req.body;
        const user = await UserModel.createUser(userData);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error);
    }

}

module.exports = { getAllUsers,getUserById,createUser };
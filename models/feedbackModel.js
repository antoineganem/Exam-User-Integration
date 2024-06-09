const { db } = require('../config/db'); // importamos la base de datos 

const getfeedbackById = async(id) => {
    try {
        const query =  'SELECT U.name, f.feedback FROM users U JOIN feedback f ON U.id = f.userd_id WHERE U.id = $1;'
        const {rows} = await db.query(query,[id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

const createFeedback = async(feedback, userdId) => {
    try{
        const query = "INSERT INTO feedback (feedback,userd_id) VALUES ($1, $2) RETURNING *;";
        const {rows} = await db.query(query,[feedback,userdId]);
        return rows[0];
    } catch(error) {
        console.log(error);
        throw new Error(error);
    }
}


module.exports = { getfeedbackById, createFeedback};
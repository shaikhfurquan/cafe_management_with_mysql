import mysql from 'mysql2'


var connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})


// Function to connect to the database, returning a Promise
const connectDB = () => {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to the database:', err.message);
                reject(err);
                return;
            }
            console.log('Connected to the database as ID ==>', connection.threadId);
            resolve();
        });
    });
};

export default connectDB
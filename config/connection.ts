const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('lms2', 'varun2', 'varun2',
    {
        host : 'localhost',
        port:5432,
        dialect : 'postgres'
    },
);

const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('connection successful');
    } catch(err) {
        console.log('An error occurred', err);
    }
}

checkConnection();

export {sequelize};
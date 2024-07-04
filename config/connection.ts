const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('lms', 'varun', 'varun',
    {
        host : 'localhost',
        dialect : 'postgres'
    },
);

const checkConnection = async () => {
    try {
        await sequelize.authentic;
        console.log('connection successful');
    } catch(err) {
        console.log('An error occurred', err);
    }
}

checkConnection();

export {sequelize};
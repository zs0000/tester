const Pool = require("pg").Pool;

const pool = new Pool ({
    user:"postgres",
    password:"ciliatus",
    host:"localhost",
    port: 5432,
    database:"repdb"
});

module.exports = pool;
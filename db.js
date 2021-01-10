const Pool = require('pg').Pool;
const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config();
// const pool = new Pool({
//     user: 'qvkjbbfwzcfvut',
//     password: 'a19763df01d1eb026c84e6d780a5b34f23d5dbecce238f53e90b41f8e0f331d8',
//     host: 'ec2-18-210-51-239.compute-1.amazonaws.com',
//     port: 5432,
//     database: 'dfgm3fjipert9v',
//     ssl: true,
// })
/**
 * This is used for loyalty db, which resides in a different db
 */

// let client = new pg.Client({
//     user: "uqpaemdikeghlb",
//     password: "2cff2bfa712bb26ec42c900738eee650eaca5f238478058e05ef59bc518ee90b",
//     database: "d3p8atlb5d7d3h",
//     port: 5432,
//     host: "ec2-35-171-31-33.compute-1.amazonaws.com",
// });

let client = new pg.Client({
    user: "oaosrorrjwstfe",
    password: "d8fa311ba5eda6a04ac36604541465c2be6804397eb7154d5a355efe21072222",
    database: "d6a503j2vj6pei",
    port: 5432,
    host: "ec2-34-202-65-210.compute-1.amazonaws.com",
});

client.connect();

module.exports = client;
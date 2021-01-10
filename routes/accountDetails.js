const express = require('express');
const router = express.Router();
const client = require('../db');

/* GET all accounts listing. */
router.get('/', async (req, res, next) => {
    try{
        let sql = 'select id, account_id, account_name, tasks, zaps, plan from account_details';

        await client
            .query(sql)
            .then(result => {
                res.json(result.rows);
            })
            .catch(err => console.error('Error executing query', err.stack))

    }catch(err) {
        console.error(err.message);
    }
});


module.exports = router;
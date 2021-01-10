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

router.get('/accounts/:account_id', async (req, res, next) => {

    try{
        const sql = 'SELECT id, account_id, account_name, tasks, zaps, plan from account_details WHERE account_id = $1';
        const {account_id} = req.params;
        await client
            .query(sql, [account_id])
            .then(result => {
                console.log(new Date(), JSON.stringify(result));
                res.json(result.rows);
            })
            .catch(err => console.error('Error executing query', err.stack));
        console.log(new Date(), req.params);

    }catch(err){
        console.error(err.message);
    }
})

module.exports = router;
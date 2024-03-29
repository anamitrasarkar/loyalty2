const express = require('express');
const router = express.Router();
const client = require('../db');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    try{
        let sql = 'select points__c, Birthdate__c, Contact__c, category__c, id_card__c from salesforce.Loyalty_Details__c';

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

router.get('/loyalties/:id_card__c', async (req, res, next) => {

    try{
        const sql = 'SELECT points__c, Birthdate__c, Contact__c, category__c, id_card__c from salesforce.Loyalty_Details__c WHERE id_card__c = $1';
        const {id_card__c} = req.params;
        await client
            .query(sql, [id_card__c])
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

router.put('/loyalties/:id_card__c', async(req, res, next) => {
    try{
        const sql = 'update salesforce.Loyalty_Details__c SET birthdate__c = $1 WHERE id_card__c = $2';
        const {id_card__c  } = req.params;
        const {birthdate__c} = req.body;
        console.log(new Date(), ' req.body : ' + req.body);
        console.log(new Date(), ' birthdate : ' + birthdate__c);
        console.log(new Date(), ' id_card__c : ' + id_card__c);
        await client
            .query(sql, [birthdate__c, id_card__c ])
            .then(result => {
                console.log(new Date(), JSON.stringify(result));
                res.json({result: 'Record updated successfully.'});
            })
            .catch(err => console.error('Error executing query', err.stack));
    }catch(err) {
        console.error(err.message);
    }
})

module.exports = router;

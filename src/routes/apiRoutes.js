const express = require('express');
const router = express.Router();
const data = require('../models/transactionModel');
const transactions = require('../models/transactionModel');

router.get('/transactions', (req, res) => {
    const {description, type, amount, date } = req.query;
let filteredtransactions = data
    .filter(
        (transactions) =>
            !description || transactions.description.toLowerCase() === description.toLowerCase(),
    )
    .filter((transactions) => !type || transactions.type === parseFloat(type))
    .filter(
        (transactions) => !amount || transactions.amount.toLowerCase().includes(amount.toLowerCase()),
    )
    .filter(
        (transactions) =>
            date === undefined ||
            transactions.date === (date === 'true'),
    );
return filteredtransactions.length === 0
    ? res.status(404).json({
        status: 404,
        message: 'No transactions found',
    })
    : res.status(200).json({
        status: 200,
        message: 'Transactions retrieved successfully',
        data: filteredtransactions,
    });
});

router.post('/transactions', (req, res) => {
    const { description, amount} = req.body;
    if (!description || !amount) {
        return res.status(400).json({
            status: 400,
            message: 'Bad Description and amount are required',
        });
    }

    const newItem = { id: data.lenght + 1, ...req.body};
    data.push(newItem);
    return res.status(201).json({
        status: 201,
        message: 'Transaction crerated successfully',
        data: newItem,
    });
});

router.put('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex((d) => d.id === id);
    if (index === -1) {
        return res.status(404).json({
            status: 404,
            message: 'transactions with ID ${id} not found'
        });
    }

    data[index] = {id, ...req.body};
    res.status(200).json({
        status: 200,
        message: 'transactions updated successfully',
        data: data[index],
    });
});


router.delete('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex((d) => d.id === id);
    if (index === -1) {
        return res.status(404).json({
            status: 404,
            message: 'transactions with ID ${id} not found'
        });
    }

    data.splice(index, 1);
    res.status(200).json({
        status: 200,
        message: 'transactions deleted successfully',
    });
});

module.exports = router;
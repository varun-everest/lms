import { loan } from '../models/loans';
import express, { Request, Response } from 'express';
const loanRouter = express.Router();

// Get all Loans
loanRouter.get('/loans', async (req, res) => {
    try {
        const loans = await loan.findAll();
        if (loans.length === 0) return res.status(404).json({ message: "No Loans Found" });
        res.json({loans});
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Get one loan
loanRouter.get('/loans/:id', async (req, res) => {
    try {
        const l = await loan.findByPk(parseInt(req.params.id));
        if (l === null) {
            return res.status(404).json({ message: "Loan Not Found" });
        }
        res.json(l);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

export {loanRouter};

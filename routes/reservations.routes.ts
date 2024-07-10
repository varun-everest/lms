import { reservation } from "../models/reservations";
import express, {Request, Response} from 'express';

const reservationRouter = express.Router();

// Get all Loans
reservationRouter.get('/loans', async (req, res) => {
    try {
        const loans = await reservation.findAll();
        if (loans.length === 0) return res.status(404).json({ message: "No reservations Found" });
        res.json({loans});
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Get one reservation
reservationRouter.get('/loans/:id', async (req, res) => {
    try {
        const l = await reservation.findByPk(parseInt(req.params.id));
        if (l === null) {
            return res.status(404).json({ message: "Reservation Not Found" });
        }
        res.json(l);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

export {reservationRouter};
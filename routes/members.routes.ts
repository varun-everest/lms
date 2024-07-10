import { member } from "../models/members";
import express, { Request, Response } from 'express';
const memRouter = express.Router();


// fetching all the members
memRouter.get('/members', async (req: any, res: any) => {
    try {
        const allMembers = await member.findAll();
        if (allMembers.length === 0) 
            return res.status(404).json({ message: "No Members Found" });
        res.json(allMembers);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Get the details of the member by id:
memRouter.get('/members/:id', async (req: any, res: any) => {
    try {
        const m = await member.findByPk(req.params.id);
        if (m === null) {
            return res.status(404).json({ message: "Member Not Found" });
        }
        res.json(m);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Creating a new member
memRouter.post('/members', async (req: any, res: any) => {
    try {
        const mem = await member.create(req.body);
        res.json(mem);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update a member
memRouter.put('/members/:id', async (req: any, res: any) => {
    try {
        const [updated] = await member.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedMember = await member.findByPk(req.params.id);
            res.json(updatedMember);
        } else {
            res.status(404).json({ message: "Member Not Found" });
        }
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Delete a member :
memRouter.delete('/books/:id', async (req: any, res:any) => {
    try {
        const deleted = await member.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Member Deleted" });
        } else {
            res.status(404).json({ message: "Member Not Found" });
        }
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

export {memRouter};

import { author } from "../models/authors";
import express, { Request, Response } from 'express';
const authRouter = express.Router();

// Get all authors
authRouter.get('/', async (req, res ) => {
    try {
        const authors = await author.findAll();
        if (authors.length === 0) return res.status(404).json({ message: "No Authors Found" });
        res.json({Authors: authors});
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Get one author
authRouter.get('/:id', async (req, res) => {
    try {
        const ar = await author.findByPk(req.params.id);
        if (ar === null) {
            return res.status(404).json({ message: "Author Not Found" });
        }
        res.json(ar);
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
});

// Create a new author
authRouter.post('/', async (req, res) => {
    try {
        const a = await author.create(req.body);
        res.json(a);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
authRouter.put('/:id', async (req, res) => {
    try {
        const [updated] = await author.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedAuthor = await author.findByPk(req.params.id);
            res.json(updatedAuthor);
        } else {
            res.status(404).json({ message: "Author Not Found" });
        }
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Delete an author
authRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await author.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Author Deleted" });
        } else {
            res.status(404).json({ message: "Author Not Found" });
        }
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

export {authRouter};
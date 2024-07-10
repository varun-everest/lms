import { author } from "../models/authors";
import { app } from "../config/server";


// Get all authors
app.get('/', async (req: any, res: any ) => {
    try {
        const authors = await author.findAll();
        if (authors.length === 0) return res.status(404).json({ message: "No Authors Found" });
        res.json({Authors: authors});
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});
// Get one author
app.get('/:id', async (req:any, res: any) => {
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
app.post('/', async (req: any, res: any) => {
    try {
        const a = await author.create(req.body);
        res.json(a);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
app.put('/:id', async (req: any, res: any) => {
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
app.delete('/:id', async (req: any, res: any) => {
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

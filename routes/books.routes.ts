import { book } from "../models/books";
import { app } from "../config/server";

// fetching all the books
app.get('/books', async (req : any, res : any) => {
    try {
        // Fetch all authors include books:
        const allBooks = await book.findAll();
        if (allBooks.length === 0)
            return res.status(404).json({ message: "No Books Found" });
        res.json(allBooks);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Get the details of the book by id:
app.get('/books/:id', async (req : any, res : any)  => {
    try {
        const b = await book.findByPk(req.params.id);
        if (b === null) {
            return res.status(404).json({ message: "Book Not Found" });
        }
        res.json(b);
    } catch (err : any) {
        res.status(500).json({message: err.message});
    }
});

// Creating a new book
app.post('/books', async (req : any, res : any) => {
    try {
        const bk = await book.create(req.body);
        res.json(bk);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update a book
app.put('/books/:id', async (req : any, res : any) => {
    try {
        const [updated] = await book.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedBook = await book.findByPk(req.params.id);
            res.json(updatedBook);
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Delete a book :
app.delete('/books/:id', async (req : any, res : any) => {
    try {
        const deleted = await book.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Book Deleted" });
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});
import { app} from "../config/server"; 
import { member } from "../models/members";
import { req, res } from "../config/server";

// fetching all the members
app.get('/members', async (req: any, res: any) => {
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
app.get('/members/:id', async (req: any, res: any) => {
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
app.post('/members', async (req: any, res: any) => {
    try {
        const mem = await member.create(req.body);
        res.json(mem);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update a member
app.put('/members/:id', async (req: any, res: any) => {
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
app.delete('/books/:id', async (req: any, res:any) => {
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

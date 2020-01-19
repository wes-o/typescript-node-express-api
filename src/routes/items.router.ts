// Router for 'item.ts'
// TODO: examples for modifying logic to include persistent data from PostgreSQL, MongoDB, etc.
// in '../services/items/items.service.ts 

import express, { Request, Response } from "express";
import * as ItemService from "../services/items/items.service";
import { Items } from "../items/items";
import { Item } from "../items/item.interface";

// Defined Express router 
export const itemsRouter = express.Router();

// GET items/
itemsRouter.get("/", async (req: Request, res: Response) => {
    try {
        const items: Items = await ItemService.findAll();

        res.status(200).send(items);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

// GET items/:id
itemsRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const item: Item = await ItemService.find(id);

        res.status(200).send(item);
    } catch (e) {
        res.status(404).send(e.message);
    }
});


// POST items/
itemsRouter.post("/", async (req: Request, res: Response) => {
    try {
        const item: Item = req.body.item;

        await ItemService.create(item);

        res.sendStatus(201);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

// PUT items/
itemsRouter.put("/", async (req: Request, res: Response) => {
    try {
        const item: Item = req.body.item;

        await ItemService.update(item);

        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// DELETE items/:id

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await ItemService.remove(id);

        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

import { Router } from "express";

const router = Router();

let products = [];

router.get("/", (req, res) => {
    res.json(products);
})

export default router
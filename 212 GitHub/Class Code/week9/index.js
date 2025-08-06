import express from "express"; // create server
import mongoose from "mongoose"; // connect to DB
import dotenv from "dotenv"; // read sensitive file
import cors from "cors"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGODB_CONNECTION)
const db = mongoose.connection;

db.once("open", () => {
    console.log("Connected to MongoDB");
});

db.on("error", (err) => {
    console.log("DB Error");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})



import Book from "./models/book.js"
app.get("/books/all", async (req, res) => {
    try {
        const result = await Book.find({price: {$lt: 11}});
        res.json(result);
    } catch (error) {
        console.log(error)
        return
    }
})

app.post("/books/save", async (req, res) => {
    // 1 - Parse the data
    const { title, authors, page, publisher, genres, price } = req.body;
    // 2 - Create a new book instance
    const newBook = new Book({
        title,
        authors,
        page,
        publisher,
        price,
        genres,
    });
    newBook.save()
        .then((savedBook) => {
            res.status(201).json(savedBook);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});


import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import lodash from "lodash";
import { fileURLToPath } from "url";
import {dirname} from "path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename)
console.log(_dirname)



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + "-" + file.originalname)
  }
})
const upload = multer({ storage: storage })

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/fetch/single", (req,res)=>{

    let content = fs.readdirSync("./uploads")
    let randomFile = lodash.sample(content)
    res.sendFile(`/server/uploads/${randomFile}`);
})

app.post("/save/single", upload.single("file"), (req,res)=>{
    res.json({message: "Thanks for uploading file"})
    
})

app.listen(PORT, () =>{
    console.log(`http:/localhost:${PORT}`)
}) 
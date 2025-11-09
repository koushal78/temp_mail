import express from "express"
import { createMailbox, getAllMessages, getMessage } from "../controllers/mail.js"

const mailRouter = express.Router();


mailRouter.get("/mail",createMailbox);
mailRouter.post("/allMessage",getAllMessages);
mailRouter.post("/message",getMessage)
export default mailRouter
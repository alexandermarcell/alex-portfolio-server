const express = require("express");
const router = express.Router();

const { v4: uuidv4 } = require("uuid");

const fs = require('fs');

function seeMessages(){
    const messages = fs.readFileSync('./data/messages.json');

    const parsedMessages = JSON.parse(messages);

    return parsedMessages;
}

function writeMessages(data) {
    const stringifiedData = JSON.stringify(data);
    fs.writeFileSync('./data/messages.json', stringifiedData);
}

router.get('/', (req, res) => {
    const messages = seeMessages();
    res.status(200).json(messages);
})

router.post('/', async(req, res) => {
    const messages = seeMessages();

    const { name, email, message } = req.body;

    if(!name || !email || !message) {
        return res.status(400).json({
            msg: 'All fields must be filled out'
        })
    }

    const newMessage = {
        id: uuidv4(),
        name,
        email,
        message,
        timestamp: Date.now(),
    }

    messages.push(newMessage);

    writeMessages(messages);

    res.status(201).json(newMessage);
})

module.exports = router;
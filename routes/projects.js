const express = require("express");
const router = express.Router();

const fs = require('fs');

function seeProjects(){
    const projects = fs.readFileSync('./data/projects.json');

    const parsedProjects = JSON.parse(projects);

    return parsedProjects;
}

router.get('/', (req, res) => {
    const projects = seeProjects();
    res.status(200).json(projects);
})

module.exports = router;
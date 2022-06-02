const express = require('express');
const app = express();
const downloadRoutes = require('./routes/download');
const projectRoutes = require('./routes/projects');
const cors = require('cors');
const PORT = process.env.PORT || 5505;

app.use(cors());

app.use(express.json());

app.use(express.static('./public'));

app.use('/api/v1/download', downloadRoutes);

app.use('/api/v1/projects', projectRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on: ${PORT}`)
})
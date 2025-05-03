const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const newsRoutes = require('./routes/news');
app.use('/api/news', newsRoutes);

const agendaRoutes = require('./routes/agenda');
app.use('/api/agenda', agendaRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));

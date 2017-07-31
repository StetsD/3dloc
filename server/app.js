let express = require('express');
let bodyParser = require('body-parser');
let db = require('./utils/connect');
let config = require('./config.json');

db.setConnection();

const app = express();

app.use(bodyParser.json());

app.post('/studios', (req, res) => {
	db.createStudio(req.body).then(data => res.send(data));
});

app.get('/studios', (req, res) => {
	db.getStudio().then(data => res.send(data));
});

app.delete('/studios/:id', (req, res) => {
	db.deleteStudio().then(req.param.id).then(data => send(data));
});




const server = app.listen(config.PORT, () => {
	console.log(`Server is running on port ${config.PORT}`);
});

let express = require('express');
let bodyParser = require('body-parser');
let db = require('./utils/connect');
let config = require('./config.json');
let path = require('path');
let rootPath = path.resolve(process.cwd().replace(/server/g, ''), 'public')
db.setConnection();

const app = express();

app.use('*', express.static(rootPath + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res)=> {
	res.sendFile(rootPath + '/index.html');
})

// app.use('/studios/:id', express.static(rootPath + '/'));
app.get('/studios/1', (req, res) => {
	console.log(req.headers.connection);
	if(req.headers.connection = 'keep-alive'){
		res.sendFile(rootPath + '/index.html');
	}else{
		db.getStudio(req.query.id).then(data => res.send(data));
	}
});


app.post('/studios', (req, res) => {
	db.createStudio(req.body).then(data => res.send(data));
});

app.delete('/studios/:id', (req, res) => {
	db.deleteStudio().then(req.param.id).then(data => send(data));
});


app.get('*', (req, res)=> {
	res.sendFile(rootPath + '/index.html');
})

const server = app.listen(config.PORT, () => {
	console.log(`Server is running on port ${config.PORT}`);
});

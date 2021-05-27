const express = require('express');
const path = require('path');
const cors = require('cors');
const { connection, close } = require('./servcies/dataBase/rethinkdb');

const studentApiRouter = require('./Routes/api/student');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(connection);

app.get('/', (req, res) => {
    res.render('index', { titulo: 'Mi primera app' });
});

app.use('/api/students', studentApiRouter);

app.use(close);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

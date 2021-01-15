const express = require('express');
const knex = require('knex');
const cors = require('cors');

const db = knex({
    client: 'mysql',
    connection: {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    }
})
const app = express();

const PORT = 3000;
app.use(cors());
app.use(express.static('html'));

db.schema.createTableIfNotExists('people', table => {
    table.increments();
    table.string('name');
}).then('Created');
// Insert name on server start
db.insert({name: 'Full Cycle!'}).into('people').then('Inserted');

app.get('/list', (req, res) => db.select('*').table('people').then(names => res.json(names)));

app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`));

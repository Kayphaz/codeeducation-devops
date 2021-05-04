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
// app.use(express.static('./html'));

db.schema.createTableIfNotExists('modulos', table => {
    table.increments();
    table.string('name');
}).then('Created');
// Insert name on server start
db.insert({name: 'Docker'}).into('modulos').then('Inserted');
db.insert({name: 'Kubernetes'}).into('modulos').then('Inserted');
db.insert({name: 'Observabilidade'}).into('modulos').then('Inserted');

app.get('/', (req, res) => db.select('*').table('modulos').then(names => res.json(names)));

app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`));

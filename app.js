const express = require('express');
const app = express();
const trains = require('./routes/trains');

const packages = require('./routes/packages');
const prices = require('./routes/prices');
const timetable = require('./routes/timetable');
const coaches = require('./routes/coaches');
const login = require('./routes/login')
const display = require('./routes/displaying')
const contact = require('./routes/contact')
const admin = require('./routes/admin')


app.use(express.json());
app.use('/api/trains', trains);

app.use('/api/packages', packages);
app.use('/api/prices', prices);
app.use('/api/timetable', timetable);
app.use('/api/coaches', coaches);
app.use('/api/login', login);
app.use('/api/display', display);
app.use('/api/contact', contact);
app.use('/api/admin',admin);





const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');
//Import routes
const postRoutes = require('./routes/posts')

//middlewares
app.use(bodyParser.json());

/* app.use('/posts', () => {
    console.log('posts hit')
}) */


//routes
app.get('/', (req, res)=>{
    res.send('Hey whatsup')
});

/* app.get('/posts', (req, res)=>{
     res.send('Hey these are the posts')
}); */
app.use('/posts', postRoutes);

app.get('*', (req, res)=>{
    res.send(`hey its 404`)
});

//Conntect to database
mongoose.connect(process.env.DB_CONNECTIONS, 
{ useUnifiedTopology: true }, 
{ useNewUrlParser: true }, () => {
    console.log('connected to db')
})

//port listening
app.listen(3000);
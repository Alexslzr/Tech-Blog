const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', async (req,res)=>{   
    try{
        res.render('homepage')
    } catch(err){
        res.status(400).json(err)
    }
})

app.get('/dashboard', async (req,res)=>{
        try{
            res.render('dashboard')
        } catch(err){
            res.json(err)
        }  
})


app.get('/login', async (req,res)=>{   
    try{
        res.render('login');
    } catch(err){
        res.status(400).json(err)
    }
})

app.get('/signup', async (req,res)=>{   
    try{
        res.render('signup');
    } catch(err){
        res.status(400).json(err)
    }
})


/*
app.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
*/

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });
  

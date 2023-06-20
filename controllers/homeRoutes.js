const router = require('express').Router();


router.get('/', async (req,res)=>{   
    try{
        res.render('homepage')
    } catch(err){
        res.status(400).json(err)
    }
})

router.get('/dashboard', async (req,res)=>{
        try{
            res.render('dashboard')
        } catch(err){
            res.json(err)
        }  
})


router.get('/login', async (req,res)=>{   
    try{
        res.render('login');
    } catch(err){
        res.status(400).json(err)
    }
})

router.get('/signup', async (req,res)=>{   
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

module.exports = router;
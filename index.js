const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/',(req,res) => {
    res.send('Hello World');
});

const users = [
    {id:1,name:'Sabana',email:'sabana@gmail.com',phone:'01818857587'},
    {id:2,name:'Sabnor',email:'Sabnor@gmail.com',phone:'01818857587'},
    {id:3,name:'Suchorita',email:'Suchurita@gmail.com',phone:'01818857587'},
    {id:4,name:'Suchonda',email:'Suchonda@gmail.com',phone:'01818857587'},
    {id:5,name:'Srabonti',email:'Srabonti@gmail.com',phone:'01818857587'},
    {id:6,name:'Sabila',email:'Sabila@gmail.com',phone:'01818857587'},
    {id:7,name:'Sohana',email:'Sohana@gmail.com',phone:'01818857587'}
]

app.get('/users',(req,res) => {
    if(req.query.name){
      const search = req.query.name.toLowerCase();
      const matched = users.filter(u => u.name.toLowerCase().includes(search));
      res.send(matched);
    }
    else{
      res.send(users);
    }
   
})

app.post('/user',(req,res) => {
   console.log(req.body);
   const user = req.body;
   user.id = users.length + 1;
   users.push(user);
   res.send(users);
})

app.get('/user/:id',(req,res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.get('/fruits',(req,res) => {
    res.send(['Apple','Mango','Banana']);
})


app.listen(port,() => {
    console.log('Listening to port',port);
})
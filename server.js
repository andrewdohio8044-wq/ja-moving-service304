const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
  res.send('J&A Moving API Running');
});

app.post('/book', (req,res)=>{
  res.json({message:'Booking received'});
});

app.listen(5000, ()=> console.log('Server running'));

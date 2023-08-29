const mongoose = require('mongoose');

const db = process.env.DATABASE;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connection successful');
}).catch((err)=>{
    console.log('No connection');
    console.log(err);
})
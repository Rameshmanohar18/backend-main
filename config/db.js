const mongoose = require('mongoose');
const connecturl='mongodb://127.0.0.1:27017/Aliceblue'

mongoose.connect(connecturl)

.then((connect)=>{
    console.log(('DB is connected...'));
})
.catch((err)=>{
    console.log('DB is not connect',err);
})
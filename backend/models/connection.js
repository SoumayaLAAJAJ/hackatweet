const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://admin:xZatALVRkKzL2Da@cluster0.nkys7ft.mongodb.net/hackatweet';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 }).then(() => console.log('Database connected')).catch(error => console.error(error));
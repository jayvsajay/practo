import mongoose from 'mongoose';

async function connection() {
    try{
        console.log(process.env.mongodburl);
        mongoose.connect(process.env.mongodburl);
    }

    catch(err){
        console.log(err);
    }
}

module.exports = connection;
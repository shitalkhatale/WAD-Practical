import mongoose from 'mongoose';
const DBconnection= async ()=>{
    const MONDB_URL=`mongodb://shitalkhatale2003:shital2003@ac-won8ffo-shard-00-00.ulwkmxs.mongodb.net:27017,ac-won8ffo-shard-00-01.ulwkmxs.mongodb.net:27017,ac-won8ffo-shard-00-02.ulwkmxs.mongodb.net:27017/?ssl=true&replicaSet=atlas-8j7mqg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(MONDB_URL,{useNewUrlParser:true});
        console.log('DATA BASE CONNECTED SUCCESSFULLY');
    }
    catch(error){
        console.error('error while connectiong the database',error.message);
    }
}
export default DBconnection;
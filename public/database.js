const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb+srv://Asylai:Aktau123@cluster0.r0pyx.mongodb.net/nutrimoon?retryWrites=true&w=majority");
const start = async ()=>{
    try {
        await client.connect();
    }
    catch (e){
        console.log(e)
    }
}
start()
import  Mongoose  from "mongoose";

Mongoose
//mongodb://localhost/emprendeapp
try {
    Mongoose.connect( 'mongodb+srv://admin:1234@cluster0.u1fwz.mongodb.net/emprendeApp', {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log("connected"));    
    }catch (error) { 
    console.log("could not connect");    
    }



//.connect("mongodb://localhost/emprendeapp")
//.connect('mongodb+srv://admin:1234@cluster0.u1fwz.mongodb.net/emprendeApp')
//.then((db)=>console.log("Ya en linea XD"))
//.catch((err)=>console.log("No se conecta :("));


export default Mongoose

//'mongodb+srv://admin:1234@cluster0.u1fwz.mongodb.net/EmprendeApp?retryWrites=true&w=majority';

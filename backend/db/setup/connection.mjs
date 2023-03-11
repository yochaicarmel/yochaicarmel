import mongoose from "mongoose";
import  initialData from './data.mjs';  
import Soldier from "../models/soldier.model.mjs";
import * as services from './services.mjs';


export async function connectToDB() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect("mongodb://127.0.0.1:27017/tinokotDB");
        console.log("succesfully connected  to mongoDB");
        const soldiers = await services.getAllSoldiers();
        if (soldiers.length === 0) {
            await services.insertSoldiers(initialData);
            console.log("db was empty, data inserted seccessfully");

        } else {

            console.log("db has stored data");
            const soldiers = await services.getAllSoldiers();
            Soldier.find().then(function(found) {
                console.log(found)
            })
        }
    } catch (err) {
        console.log(err);
    }      
}
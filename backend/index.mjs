import express from 'express';
import cors from 'cors';
import { registerRoutes } from './api/routesRegister.mjs';
import { connectToDB } from './db/setup/connection.mjs';
const app = express();

const soldiers = [
                  {id: 1327, gmush: "מקבל"},
                  {id: 1455, gmush: "לא מקבל"}
                 ];

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
registerRoutes(app);
await connectToDB();


///app.get('/soldier/:id/ids', function(req, res) {
    ///const soldier = soldiers.find(sold => sold.id == req.params.id);
    ////res.json({gmush: soldier.gmush})
///});

app.listen(3000, function() {
    console.log("started on port 300")
});
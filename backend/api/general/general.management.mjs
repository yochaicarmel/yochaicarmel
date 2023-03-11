import { json } from "express";
import Soldier from "../../db/models/soldier.model.mjs";

async function getStatusUnit(req, value) {
    return await Soldier.find({unit: req.params.unit, 'doch1.status': value});
}

export function getDoch1Unit(req, res) {
    Promise.all([getStatusUnit(req, "טרם הוזן"), getStatusUnit(req, "ביחידה"), getStatusUnit(req, "מחלה"), getStatusUnit(req, "אחר")]).then(([unknown ,atUnit, sick, other]) => res.json(
        { soldiers: [
            {name: "טרם הוזן", value: unknown.length },
            {name: "ביחידה", value: atUnit.length },
            {name:"מחלה", value: sick.length},
            {name: "אחר", value: other.length}
          ]
           
        }))
}

export function getDoch1(req, res) {
        Promise.all([Soldier.find({}), Soldier.find({'doch1.status': "ביחידה"})]).then(([total, atBase]) => {
            res.json({atBaseSoldiers: atBase.length, totalSoldiers: total.length});
        }) 
}
import Soldier from "../models/soldier.model.mjs";

export async function getAllSoldiers() {
    const soldiers = await Soldier.find({});
    return soldiers;
}

export async function getUnitSoldiers(unitName) {
    const soldiers = await Soldier.find({unit: unitName});
    return soldiers;
}

export async function getAllUnits() {
    const units = await Unit.find({});
    return units;
}

export async function insertSoldiers(soldiers) {
    const insertedSoldiers = await Soldier.insertMany(soldiers);
    return insertedSoldiers;
}

export async function insertUnits(units) {
    const insertedUnits = await Unit.insertMany(units);
    return insertedUnits;
}


export function createUnit(name ,soldiers) {
    return new Unit({
        name: name,
        soldiers: [soldiers]
    });
}

export function createSoldier( id,
    classiffication,
    unit,
    name,
    rank,
    birth,
    profile,
    tel,
    ) {}
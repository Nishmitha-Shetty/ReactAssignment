import Dexie from "dexie";

const db = new Dexie("ParkingDetails");
db.version(1).stores({ slots: "++id" });

export default db;

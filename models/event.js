const fs = require("fs");
const path = require("path");

class Event {
    id;
    title;
    description;
    date;
    maxSeats;

    constructor({id, title, description, date, maxSeats}){
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }

    // leggere sul DB
    static index() {

        const dbPath = path.join(__dirname, "..", "db", "db.json");

        try{
            const db = fs.readFileSync(dbPath, "utf-8");
            
            console.log(db);
            console.log(Event.getId)

            return JSON.parse(db);
        } catch (err){
            console.log(err.message)

            return [];
        }
        
    }

    // scrivere sul DB 
    store() {
        console.log(this)
        
        const dbPath = path.join(__dirname, "..", "db", "db.json");

        try{
            const db = fs.readFileSync(dbPath, "utf-8");
            
            const dbParse = JSON.parse(db);

            dbParse.push(this);

            const dbJson = JSON.stringify(dbParse);

            fs.writeFileSync(dbPath, dbJson, "utf-8");

        } catch (err){
            console.log(err.message)

            return [];
        }
    }

    static getId(){
        // lettura db
        // ciclo il mio db se metto un if(id=)
    }

}

module.exports = Event
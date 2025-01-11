import { ObjectId } from "mongodb";


export default class Database {
    constructor(public name: string, public description: string, public image: string, public location: string, public id?: ObjectId) {}
}



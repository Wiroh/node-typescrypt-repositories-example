import { IRead } from "../interfaces/IRead";
import { IWrite } from "../interfaces/IWrite";
import * as uniqid from 'uniqid';
import * as knex from 'knex';

export class Repository<T> implements IRead<T>, IWrite<T> {
    protected knex: knex;
    private __table: string;
    constructor(knex, table) {
        this.knex = knex;
        this.__table = table;
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }    
    async findOne(uid: string): Promise<T> {
        return await this.knex(this.__table)
            .where({ uid: uid })
            .first();
    }
    async create(item: T): Promise<T> {
        const uid = uniqid();
        await this.knex(this.__table).insert({
            uid: uid,
            ...item
        });
        return await this.findOne(uid);
    }
    async update(uid: string, item: T): Promise<T> {
        await this.knex(this.__table).update(item).where({ uid: uid });
        return this.findOne(uid);
    }
    async delete(uid: string): Promise<boolean> {
        try {
            await this.knex(this.__table).delete().where({ uid: uid });
            return true;
        } catch (e) {
            return false;
        }
    }
    
}
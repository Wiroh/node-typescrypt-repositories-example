import * as knex from 'knex';
import { Config } from 'knex';

export class ConnectionKnex {
    private static _knex: knex;

    public knex(): knex {
        if (!ConnectionKnex._knex) {
            ConnectionKnex._knex = knex(exportConfig());
        }
        return ConnectionKnex._knex;
    }
}

function exportConfig(): Config {
    const environment = process.env.NODE_ENV || 'development';
    return require('../knexfile.js')[environment]
}

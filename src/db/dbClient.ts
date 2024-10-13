import { Pool } from 'pg';
import { databaseUrl } from '../config';

const pool = new Pool({
    connectionString: databaseUrl,
});

export function query(text: string, params: any[]) {
    return pool.query(text, params);
}

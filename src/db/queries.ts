// import { query } from './dbClient';
// import { ApiResponse } from '../apiService';

// export async function updateDatabase(apiData: ApiResponse): Promise<void> {
//     const queryText = 'UPDATE my_table SET data = $1 WHERE id = $2';
//     const queryParams = [apiData.value, apiData.id];

//     try {
//         await query(queryText, queryParams);
//         console.log('Base de datos actualizada exitosamente.');
//     } catch (error) {
//         console.error('Error actualizando la base de datos:', error);
//         throw error;
//     }
// }

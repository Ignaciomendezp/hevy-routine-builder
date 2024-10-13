import { createRoutineFolder } from './apiService';
import { buildFolderRoutineName } from '../utils'

async function main() {
  const routineFolderName = buildFolderRoutineName();
  const { routine_folder } = await createRoutineFolder({ title: routineFolderName});
  const folder_id = routine_folder.id
}

export { main }

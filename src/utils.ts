import { format, addDays } from 'date-fns';

function buildFolderRoutineName(): string {
  const tomorrow = addDays(new Date(), 1);
  return `Semana del ${format(tomorrow, 'dd/MM/yy')}`;
}

export { buildFolderRoutineName }
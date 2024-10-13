import type { Exercise } from '../types/hevyTypes'

export type GetExerciseTemplatesParams = {
  page?: number;
  pageSize?: number;
}

export type GetExerciseTemplateByIdParams = {
  id: string
}

export type CreateRoutineParams = {
  folder_id?: string;
  title: string;
  notes?: string;
  exercises: Exercise[];
}

export type CreateRoutineFolderParams = {
  title: string;
}
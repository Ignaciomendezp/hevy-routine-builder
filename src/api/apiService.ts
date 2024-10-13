import ky from 'ky';
import { apiBaseUrl, apiKey } from '../config';
import type {
  CreateRoutineFolderResponse,
  CreateRoutineFolderPayload,
  GetExerciseTemplatesResponse,
  GetExerciseTemplateByIdResponse
} from '../types/hevyTypes'
import type {
  GetExerciseTemplatesParams,
  GetExerciseTemplateByIdParams,
  CreateRoutineParams,
  CreateRoutineFolderParams,
} from '../types/apiService'

const api = ky.create({
  prefixUrl: apiBaseUrl,
  headers: {
    'api-key': apiKey,
    'Content-Type': 'application/json'
  }
});

export async function getExerciseTemplates({ page = 1, pageSize = 5 }: GetExerciseTemplatesParams): Promise<GetExerciseTemplatesResponse> {
  const response = await api.get('exercise_templates', {
    searchParams: {
        page: String(page),
        pageSize: String(pageSize)
    }
  }).json<GetExerciseTemplatesResponse>();
  return response;
}

export async function getExerciseTemplateById(params: GetExerciseTemplateByIdParams): Promise<GetExerciseTemplateByIdResponse> {
  const response = await api.get(`exercise_templates/${params.id}`).json<GetExerciseTemplateByIdResponse>();
  return response;
}

export async function createRoutineFolder(params: CreateRoutineFolderParams): Promise<CreateRoutineFolderResponse> {
  const payload: CreateRoutineFolderPayload = {
    routine_folder: { title: params.title }
  };

  const response = await api.post('routine_folders', { json: payload }).json<CreateRoutineFolderResponse>();
  return response;
}

export async function createRoutine(params: CreateRoutineParams) {
  const response = await api.post('routines', { json: params }).json();
  return response;
}
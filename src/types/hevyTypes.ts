export type ExerciseTemplate = {
  id: string;
  title: string;
  type: string;
  primary_muscle_group: string;
  secondary_muscle_groups: string[];
  is_custom: boolean;
}

export type GetExerciseTemplatesResponse = {
  page: number;
  page_count: number;
  exercise_templates: ExerciseTemplate[];
}

export type GetExerciseTemplateByIdResponse = ExerciseTemplate;

export type CreateRoutineFolderPayload = {
  routine_folder: {
    title: string;
  }
}

export type CreateRoutineFolderResponse = {
  routine_folder: {
    id: number;
    index: number;
    title: string;
    updated_at: string;
    created_at: string;
  };
};

export type CreateRoutineResponse = {
  id: string;
  title: string;
  folder_id: number | null;
  updated_at: string;
  created_at: string;
  exercises: {
    index: number;
    title: string;
    notes: string;
    exercise_template_id: string;
    superset_id: number | null;
    sets: {
      index: number;
      set_type: "normal" | string;
      weight_kg: number | null;
      reps: number | null;
      distance_meters: number | null;
      duration_seconds: number | null;
      rpe: number | null;
    }[];
  }[];
}

export type CreateRoutinePayload = {
  routine: {
    title: string;
    folder_id: string | null;
    notes: string;
    exercises:  {
      exercise_template_id: string;
      superset_id: string | null;
      rest_seconds: number;
      notes: string;
      sets: {
        type: string;
        weight_kg: number;
        reps: number;
        distance_meters: number | null;
        duration_seconds: number | null;
      }[];
    }[];
  }
}
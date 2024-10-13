import type { CreateRoutinePayload } from '../../types/hevyTypes'

export const firstExercises: CreateRoutinePayload['routine']['exercises'] = [
  {
    exercise_template_id: "C6272009", // Deadlift Barbell
    notes: 'Sacar pecho. Subir lo más rápido posible',
    superset_id: null,
    rest_seconds: null,
    sets: [
      {
        type: "normal",
        weight_kg: 65,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: 65,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: 65,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
    ],
  },
  {
    exercise_template_id: "60929c31-d30d-4bbc-8dd9-4e9dde5ab54f", // Leg curl
    notes: 'Con carro',
    superset_id: null,
    rest_seconds: null,
    sets: [
      {
        type: "normal",
        weight_kg: null,
        reps: 20,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: null,
        reps: 20,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: null,
        reps: 20,
        distance_meters: null,
        duration_seconds: null,
      },
    ],
  },
];

export const secondExercises: CreateRoutinePayload['routine']['exercises'] = [
  {
    exercise_template_id: "05df2a6f-dbab-4c0c-862a-b969845fbbe8", // Revolver la olla
    notes: 'Antebrazos en fitball. Poscición de plancha. Hacer círculos con los brazos en sentido horario y antihorario',
    superset_id: null,
    rest_seconds: null,
    sets: [
      {
        type: "normal",
        weight_kg: null,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: null,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: null,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
    ],
  },
  {
    exercise_template_id: "d00111e8-697a-4f19-8bad-b35772978ebc", // Ab roller
    notes: 'Apoyar manos en el piso. Pies en el roller. Llevar pies hacia las manos. Devolverse controlando.',
    superset_id: null,
    rest_seconds: null,
    sets: [
      {
        type: "normal",
        weight_kg: null,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: null,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: null,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
    ],
  },
];
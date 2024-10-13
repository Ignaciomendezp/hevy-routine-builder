import type { CreateRoutinePayload } from '../../types/hevyTypes'

export const firstExercises: CreateRoutinePayload['routine']['exercises'] = [
  {
    exercise_template_id: "B923B230", // Deadlift Trap bar
    notes: 'Con elevador de talones. Sacar pecho. Subir lo más rápido posible',
    superset_id: null,
    rest_seconds: null,
    sets: [
      {
        type: "normal",
        weight_kg: 85,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: 85,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: 85,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
    ],
  },
  {
    exercise_template_id: "D04AC939", // Squat barbell
    notes: 'Con barra apoyada atrás. Sacar pecho. Subir lo más rápido posible.',
    superset_id: null,
    rest_seconds: null,
    sets: [
      {
        type: "normal",
        weight_kg: 80,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: 80,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: 80,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
    ],
  },
]

export const secondExercises: CreateRoutinePayload['routine']['exercises'] = [
  {
    exercise_template_id: "99D5F10E", // Ab wheel
    notes: 'Con carro',
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
    exercise_template_id: "ac2ac9b7-ca37-4448-b0a7-bf93c33a9949", // Planked dumbbell rows
    notes: 'Posición de plancha. Apoyar codo en banca. Realizar remo unilateral con mancuerna.',
    superset_id: null,
    rest_seconds: null,
    sets: [
      {
        type: "normal",
        weight_kg: 10,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: 10,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: 10,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
    ],
  },
];
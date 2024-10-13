import type { CreateRoutinePayload } from '../../types/hevyTypes'

export const firstExercises: CreateRoutinePayload['routine']['exercises'] = [
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
  {
    exercise_template_id: "B5D3A742", // Bulgarian split squat
    notes: 'Con una sola mancuerna',
    superset_id: null,
    rest_seconds: null,
    sets: [
      {
        type: "normal",
        weight_kg: 15,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: 15,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
      {
        type: "normal",
        weight_kg: 15,
        reps: 10,
        distance_meters: null,
        duration_seconds: null,
      },
    ],
  },
];

export const secondExercises: CreateRoutinePayload['routine']['exercises'] = [
  {
    exercise_template_id: "b8426d63-b090-47d6-ab4b-26cc1bb3daea", // Reverse nordic
    notes: 'Arrodillate con el tronco recto y los pies apoyados en colchoneta. Inclínate lentamente hacia atrás. Una vez que alcances el límite de tu flexibilidad, regresa de manera controlada a la posición erguida usando la fuerza de los cuádriceps.',
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
    exercise_template_id: "f1ee0a89-e989-4f52-9f6b-6b4595427287", // Ab roller
    notes: 'Apoyar ante brazos en el piso. Poner pies en roller. Posición de plancha. Oscilar hacia adelante y hacia atrás.',
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
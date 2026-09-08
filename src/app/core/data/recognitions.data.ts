import { Recognition } from '../models/site-profile.model';

export const RECOGNITIONS: readonly Recognition[] = [
  {
    title: 'Reconocimiento a mejor podcast a nivel Bolivia',
    context: 'Dato informado por el cliente; requiere respaldo oficial antes de producción.',
    details: [
      'Falta confirmar nombre del premio o evento.',
      'Falta confirmar categoría, año y proyecto reconocido.'
    ],
    status: 'pending'
  },
  {
    title: 'Nominación FENAVID por Salvia',
    context: 'Nominación declarada por el cliente para el cortometraje Salvia.',
    details: [
      'Falta confirmar edición, categoría y año del festival.',
      'Falta confirmar si Salvia se publicará como proyecto o solo como reconocimiento.'
    ],
    status: 'pending'
  }
];

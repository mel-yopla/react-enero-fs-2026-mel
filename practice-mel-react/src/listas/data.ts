interface Tarea {
  id: number;
  title: string;
  completed: boolean;
}

export const dataTareas: Tarea[] = [
  { id: 1, title: "Aprender React", completed: false },
  { id: 2, title: "Estudiar TypeScript", completed: true },
  { id: 3, title: "Crear una aplicación", completed: false },
  { id: 4, title: "Estudiar node ", completed: true },
  { id: 5, title: "Hacer ejercicio", completed: false },
];

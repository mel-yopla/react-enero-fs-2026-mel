interface Tarea {
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  username: string;
  name: string;
  position: string;
}

interface Book {
  id: string;
  titulo: string;
  autor: string;
}

export const dataTareas: Tarea[] = [
  { id: 1, title: "Aprender React", completed: false },
  { id: 2, title: "Estudiar TypeScript", completed: true },
  { id: 3, title: "Crear una aplicación", completed: false },
  { id: 4, title: "Estudiar node ", completed: true },
  { id: 5, title: "Hacer ejercicio", completed: false },
];

export const dataUsers: User[] = [
  { username: "mel-15", name: "Mel", position: "Developer" },
  { username: "profe", name: "Juan", position: "Instructor" },
  { username: "abc", name: "Jhon", position: "Director" },
];

export const dataBooks: Book[] = [
  { id: "b1", titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  { id: "b2", titulo: "El código limpio", autor: "Robert C. Martin" },
  { id: "b3", titulo: "Hábitos Atómicos", autor: "James Clear" },
];

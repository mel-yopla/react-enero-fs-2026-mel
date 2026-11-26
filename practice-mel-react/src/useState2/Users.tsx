import { useState } from "react";
import { dataUsers, type User } from "./data";
import styles from "./styles.module.css";
import { UserCard } from "./UserCard";
import { PlusIcon } from "./PlusIcon";

export const Users = () => {
  const [users, setUsers] = useState<User[]>(dataUsers);

  const addUser = () => {
    const newUser: User = {
      id: Date.now(),
      name: "Nuevo Usuario",
      email: "nuevo@ejemplo.com",
      phone: "1-234-567-890",
      website: "ejemplo.com",
      address: {
        street: "Calle Nueva",
        suite: "Apto 1",
        city: "Ciudad",
        zipcode: "12345",
        geo: { lat: "0", lng: "0" },
      },
      company: {
        name: "Nueva Empresa",
        catchPhrase: "Frase de prueba",
        bs: "Servicios varios",
      },
    };
    setUsers([...users, newUser]);
  };

  const editUser = (id: number) => {
    // Mapeamos para encontrar y editar el usuario
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, name: user.name + " (Editado)" };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const deleteUser = (id: number) => {
    // Filtramos para eliminar el usuario con ese ID
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <h2> ACTUALIZAR ESTADOS CON OBJETOS Y ARRAYS - v1</h2>
      <div className={styles.buttonContainer}>
        <button
          onClick={addUser}
          className={styles.addButton}
        >
          <PlusIcon />
          Añadir Nuevo Usuario
        </button>
      </div>

      <div className={styles.container}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={editUser}
            onDelete={deleteUser}
          />
        ))}
      </div>
    </>
  );
};

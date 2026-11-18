interface CardProps {
  username?: string;
  name: string;
  position: string;
}
const Card = ({ username = "no-username", name, position}: CardProps) => {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        margin: "10px",
        backgroundColor: "skyblue",
      }}
    >
      <li>
        <h3>{name} </h3>
        <p>Cargo: {position}</p>
        <p>Username: {username}</p>
      </li>
    </div>
  );
};

export default Card;

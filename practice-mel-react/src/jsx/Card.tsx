interface CardProps {
  username?: string;
  name: string;
  position: string;
}
const Card = (props: CardProps) => {
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
        <h3>{props.name} </h3>
        <p>Cargo: {props.position}</p>
      </li>
    </div>
  );
};

export default Card;

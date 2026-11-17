interface CardProps {
  name: string;
  position: string;
  username?: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <li>
        <h2>{props.name}</h2>
        <p>{props.position}</p>
      </li>
    </div>
  );
};

export default Card;

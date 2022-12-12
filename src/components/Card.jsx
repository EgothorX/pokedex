import "../sass/Card.scss";

export const Card = ({name, img}) => {
  return (
    <div className="card">
      <p className="card__name">{name}</p>
      <div className="card__circle"></div>
      <img className="card__img" src={img} alt="pokemon img"></img>
    </div>
  );
};

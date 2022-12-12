import "../sass/Button.scss";

export const Button = ({ icon, handleClick }) => {
  return (
    <div className="button__box">
      <button className="button" onClick={handleClick}>
        {icon}
      </button>
      <div className="button__shadow"></div>
    </div>
  );
};

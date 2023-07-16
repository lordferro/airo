import { Link } from "react-router-dom";
import "./RecepieDetails.css";
import { Icon } from "../Icon";
export const RecepieDetails = ({ recepie, checked }) => {
  return (
    <div className="card__details">
      <div className="img">
        <img alt={`${recepie.name}`} src={`${recepie.image_url}`} />
      </div>
      <div className="infos">
        <div className="name">
          <h2>{recepie.name}</h2>
          <h4>{recepie.tagline}</h4>
          <h4>{recepie.description}</h4>
        </div>

        <ul className="stats">
          <li>
            <h3>{recepie.abv} %</h3>
            <h4>Alcohol</h4>
          </li>
          <li>
            <h3>{recepie.first_brewed}</h3>
            <h4>First brewed</h4>
          </li>
        </ul>
        <div className="links">
          <Link to={'/'}>
            <button className="readMore">Back to the list</button>
          </Link>
          {checked && <Icon />}
        </div>
      </div>
    </div>
  );
};

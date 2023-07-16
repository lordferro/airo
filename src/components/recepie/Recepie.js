import { Link } from "react-router-dom";
import "./Recepie.css";
import { Icon } from "../Icon";
export const Recepie = ({ recepie, checked }) => {
  return (
    <div className="card">
      <div className="img">
        <img alt={`${recepie.name}`} src={`${recepie.image_url}`} />
      </div>
      <div className="infos">
        <div className="name">
          <h2>{recepie.name}</h2>
          <h4>{recepie.tagline}</h4>
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
          <Link to={`${recepie.id}`}>
            <button className="readMore">Read more</button>
          </Link>
          {checked && <Icon />}
        </div>
      </div>
    </div>
  );
};

import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card__img"></div>
        <div className="card__details">
          <div className="card__name">Brazil</div>
          <div className="card__data">
            <span>Population:</span> 206,135,893
          </div>
          <div className="card__data">
            <span>Region:</span> America
          </div>
          <div className="card__data">
            <span>Capital:</span> Brasilia
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

import hotel1 from "../img/hotel-1.jpg";
import hotel2 from "../img/hotel-2.jpg";
import hotel3 from "../img/hotel-3.jpg";
import sprite from "../img/sprite.svg";
import "./HotelViewUp.scss";

function HotelViewUp() {
  return (
    <div className="hotel-view--up">
      <div className="gallery">
        <figure className="gallery__item">
          <img src={hotel1} alt="Photo of hotel 1" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src={hotel2} alt="Photo of hotel 2" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src={hotel3} alt="Photo of hotel 2" className="gallery__photo" />
        </figure>
      </div>

      <div className="overview">
        <h1 className="overview__heading">Hotel Las Palmas</h1>

        <div className="overview__starts">
          <svg className="overview__icon-start">
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-start">
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-start">
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-start">
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-start">
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
        </div>

        <div className="overview__location">
          <svg className="overview__icon-location">
            <use xlinkHref={`${sprite}#icon-location-pin`}></use>
          </svg>
          <button className="btn-inline">Albufeira, Portugal</button>
        </div>

        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count">429 votes</div>
        </div>
      </div>
    </div>
  );
}

export default HotelViewUp;

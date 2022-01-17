import "./HotelView.scss";
import HotelViewUp from "./HotelView/HotelViewUp";
import HotelViewDetail from "./HotelView/HotelViewDetail";
import HotelViewReview from "./HotelView/HotelViewReview";

function HotelView() {
  return (
    <main className="hotel-view">
      <HotelViewUp></HotelViewUp>
      <div className="detail">
        <HotelViewDetail></HotelViewDetail>
        <HotelViewReview></HotelViewReview>
      </div>
      <div className="cta">
        <h2 className="cta__book-now">
          Good news! We have 4 free rooms for your selected dates
        </h2>
        <button className="btn">
          <span className="btn__visible">Book now</span>
          <span className="btn__invisible">Only 4 rooms left</span>
        </button>
      </div>
    </main>
  );
}

export default HotelView;

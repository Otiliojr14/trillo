import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HotelView from "./components/HotelView";
import "./Content.scss";

function Content() {
  return (
    <main className="container">
      <Header></Header>
      <div className="content">
        <Sidebar></Sidebar>
        <HotelView></HotelView>
      </div>
    </main>
  );
}

export default Content;

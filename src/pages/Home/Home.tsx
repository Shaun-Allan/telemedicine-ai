import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import img1 from "../Home/images/Modiji.jpg";
import img2 from "../Home/images/process.jpeg";
import img3 from "../Home/images/sanjee.jpeg";
import upArrow from "../Home/images/up_arrow.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <img
          src={img2}
          style={{ width: 400, height: 500 }}
          className=" rounded float-start "
        />
        <img
          src={img3}
          style={{ width: 400, height: 500, objectFit: "cover" }}
          className=" rounded float-end "
        />
        <center>
          <img
            src={img1}
            style={{ width: 500, height: 500, objectFit: "cover" }}
            className="img-thumbnail rounded  "
          />
        </center>
      </div>
      <center>
        <div className="text-centers bg">
          <button
            type="button"
            className="btn btn-danger btn-lg center-button"
            onClick={() => {
              navigate("/about");
            }}
          >
            Click Here To Continue
          </button>
        </div>
      </center>
    </>
  );
};

export default Home;

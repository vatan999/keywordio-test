import { useState } from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const Ads = () => {
  const [isCheckedOne, setIsCheckedOne] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);



  return (
    <div className="main-wrapper">

      {/* Card CheckBox */}
      <div className="card-wrapper">
      {/* Text ad */}
        <div className="custom-checkbox">
          <label className="label">
            <input
              type="checkbox"
              checked={isCheckedOne}
              onChange={() => setIsCheckedOne(!isCheckedOne)}
              style={{
                width: "30px", // Set the width to your desired size
                height: "30px", // Set the height to your desired size
              }}
            />
            <span className="custom-checkbox-box">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/advertising-campaign-3804704-3169581.png"
                alt="Checkbox Icon"
                className={`checkbox-image ${isCheckedOne ? "checked" : ""}`}
              />
            </span>
            <p>create</p>
            <h2>Text Ad</h2>
          </label>
        </div>
       {/*  Media Ad  */}
        <div className="custom-checkbox">
          <label className="label">
            <input
              type="checkbox"
              checked={isCheckedTwo}
              onChange={() => setIsCheckedTwo(!isCheckedTwo)}
              style={{
                width: "30px", // Set the width to your desired size
                height: "30px", // Set the height to your desired size
              }}
            />
            <span className="custom-checkbox-box">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/advertising-campaign-3804704-3169581.png"
                alt="Checkbox Icon"
                className={`checkbox-image ${isCheckedTwo ? "checked" : ""}`}
              />
            </span>
            <p>create</p>
            <h2>Media Ad</h2>
          </label>
        </div>
      </div>

      <Link to={isCheckedOne == true ? "/TextFillData" : "/AdsFillData"} style={{alignSelf: "flex-end"}}>
        <Button variant="contained" sx={{width: "120px", alignSelf: "flex-end"}}>Next</Button>
      </Link>
      
    </div>
  );
};

export default Ads;

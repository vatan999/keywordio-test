import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdsFillData = () => {
  const [userData, setUserData] = useState({
    headingFirst: "",
    headingTwo: "",
    description: "",
    landscape: "",
    portrait: "",
    square: "",
    videourl: "",
    buttonLabel: "",
    websiteUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData); 
  };

  const navigate = useNavigate();

  const notify = () => toast("Submitted Successfully");

  const handleRedirectWithTimeout = () => {
    notify();
    setTimeout(() => {
      navigate("/ads", { replace: true });
    }, 600); // 2000 milliseconds = 2 seconds
  };

  return (
    <div className="form-wrapper">
      {" "}
      <div className="user-data-form-container">
        <p className="text-form-heading">Create Text & Media</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-group-input">
              <label htmlFor="headingFirst">Heading 01</label>
              <input
                type="text"
                id="headingFirst"
                name="headingFirst"
                value={userData.headingFirst}
                onChange={handleChange}
              />
              <label htmlFor="headingTwo">Heading 02</label>
              <input
                type="text"
                id="headingTwo"
                name="headingTwo"
                value={userData.headingTwo}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-input">
              <label htmlFor="description">Description 01</label>
              <textarea
                type="text"
                id="description"
                name="description"
                value={userData.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-input">
              <label htmlFor="landscape">Landscape Marketing Image (1:9:1)</label>
              <input
                type="text"
                id="landscape"
                name="landscape"
                value={userData.landscape}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-input">
              <label htmlFor="portrait">Portrait Marketing Image (4:5)</label>
              <input
                type="text"
                id="portrait"
                name="portrait"
                value={userData.portrait}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-input">
              <label htmlFor="square">Square Marketing Image (4:5)</label>
              <input
                type="text"
                id="square"
                name="square"
                value={userData.square}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-input form-group-input-last">
              <label htmlFor="videourl">Video URL</label>
              <input
                type="text"
                id="videourl"
                name="videourl"
                value={userData.videourl}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-input">
              <label htmlFor="businessName">Business Name</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={userData.businessName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-input">
              <label htmlFor="buttonLabel">Button Label</label>
              <select
                id="country"
                name="country"
                value={userData.country}
                onChange={handleChange}
                className="input"
              >
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-input form-group-input-last">
              <label htmlFor="websiteUrl">Website Url</label>
              <input
                type="text"
                id="websiteUrl"
                name="websiteUrl"
                value={userData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <ToastContainer />
          <div className="last-div">
            <Link to={"/ads"} className="back">
              Back
            </Link>
            <button
              onClick={handleRedirectWithTimeout}
              type="submit"
              className="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdsFillData;

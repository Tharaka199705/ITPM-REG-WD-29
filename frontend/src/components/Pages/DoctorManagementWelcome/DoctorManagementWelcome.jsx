import Background from "../../Background/Background";
import Doctor from "../../../img/doctor.PNG";
import { Link, useNavigate } from "react-router-dom";

const DoctorManagementWelcome = () => {
  const navigate = useNavigate();

  return (
    <Background title="Welcome To The Doctor Management">
      <div className="d-flex justify-content-end pt-5">
        <Link to="/">
          <button className="btn btn-primary px-5 fs-4 bg-btn text-black fw-bold">
            Home
          </button>
        </Link>
      </div>

      <div className="row mt-4">
        <div className="col-6 d-flex justify-content-center ">
          <Link to="/staff/doctor/add">
            <img src={Doctor} alt="" />
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <Link to="/staff/doctor/manage">
            <img src={Doctor} alt="" />
          </Link>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6 d-flex text-white fs-2 fw-bold justify-content-center ">
          Add Doctor
        </div>
        <div className="col-6 d-flex text-white fs-2 fw-bold justify-content-center">
          Manage Doctor Details
        </div>
      </div>

      <div className="d-flex justify-content-start ">
        <button className="btn btn-primary ms-5 mt-2 fs-4 bg-btn text-black fw-bold" onClick={e=>navigate(-1)}>
          Go Back
        </button>
      </div>
    </Background>
  );
};

export default DoctorManagementWelcome;

import Background from "../../Background/Background";
import Patient from "../../../img/patient.PNG";
import { Link, useNavigate } from "react-router-dom";

const PatientManagementWelcome = () => {

  const navigate = useNavigate();

  return (
    <Background title="Welcome To The Patient Management">
      <div className="d-flex justify-content-end pt-5">
        <Link to="/">
          <button className="btn btn-primary px-5 fs-4 bg-btn text-black fw-bold">
            Home
          </button>
        </Link>
      </div>

      <div className="row mt-5 pt-5">
        <div className="col-6 d-flex justify-content-center ">
          <Link to="/patient/add">
            <img src={Patient} alt="" />
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <Link to="/patient/manage">
            <img src={Patient} alt="" />
          </Link>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6 d-flex text-white fs-2 fw-bold justify-content-center ">
          Add Patient
        </div>
        <div className="col-6 d-flex text-white fs-2 fw-bold justify-content-center">
          Manage Patient
        </div>
      </div>

      <div className="d-flex justify-content-start ">
        <button onClick={e=>navigate(-1)} className="btn btn-primary ms-5 mt-2 fs-4 bg-btn text-black fw-bold">
          Go Back
        </button>
      </div>
    </Background>
  );
};

export default PatientManagementWelcome;

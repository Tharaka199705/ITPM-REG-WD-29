import Background from "../../Background/Background";
import Nurse from "../../../img/nurse.PNG";
import Doctor from "../../../img/doctor.PNG";
import { Link } from "react-router-dom";

const StaffManageWelcome = () => {
  return (
    <Background title="Welcome To Staff Management">
      <div className="d-flex justify-content-end pt-5">
        <Link to="/">
          <button className="btn btn-primary px-5 fs-4 bg-btn text-black fw-bold">
            Home
          </button>
        </Link>
      </div>

      <div className="row mt-5">
        <div className="col-6 d-flex justify-content-center">
          <Link to="/staff/doctor">
            <img src={Doctor} alt="" />
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <Link to="/staff/nurse">
            <img src={Nurse} alt="" />
          </Link>
        </div>
      </div>
    </Background>
  );
};

export default StaffManageWelcome;

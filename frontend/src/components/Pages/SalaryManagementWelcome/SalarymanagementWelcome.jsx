import Background from "../../Background/Background";
import salary2 from "../../../img/salary2.PNG";
import { Link , useNavigate} from "react-router-dom";

const SalaryManagementWelcome = () => {
  const navigate = useNavigate();
  return (
    <Background title="Welcome To The Salary Management">
      <div className="d-flex justify-content-end pt-5">
        <Link to="/">
          <button className="btn btn-primary px-5 fs-4 bg-btn text-black fw-bold">
            Home
          </button>
        </Link>
      </div>

      <div className="row mt-4">
        <div className="col-6 d-flex justify-content-center ">
          <Link to="/salary/count">
            <img src={salary2} alt="" />
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <Link to="/salary/manage">
            <img src={salary2} alt="" />
          </Link>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6 d-flex text-white fs-2 fw-bold justify-content-center ">
          Counting Salary
        </div>
        <div className="col-6 d-flex text-white fs-2 fw-bold justify-content-center">
          Manage Salary
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

export default SalaryManagementWelcome;

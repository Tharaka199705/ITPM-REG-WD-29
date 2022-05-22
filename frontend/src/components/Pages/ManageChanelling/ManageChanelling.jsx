import { Table } from "react-bootstrap";
import Background from "../../Background/Background";
import { Link , useNavigate} from "react-router-dom";
const ManageChannelling = () => {

  const navigate = useNavigate();

  return (
    <Background title="Manage Channeling Details">
      <div className="d-flex justify-content-end mt-1">
      <Link to="/"><button className="btn btn-primary px-5 fs-4 bg-btn text-black fw-bold">
          Home
        </button></Link>
      </div>
      <form action="">
        <div className="row mb-1">
          <div className="col-2"></div>
          <div className="col-2">
            <span className="text-light fs-4">Room Type</span>
          </div>
          <div className="col-3 align-items-center d-flex justify-content-between">
            <div>
              <input type="radio" />
              <span className="text-white ps-3 fs-5">Room</span>
            </div>
            <div>
              <input type="radio" />
              <span className="text-white ps-3 fs-5">Laboratory</span>
            </div>
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2"></div>
          <div className="col-2">
            <span className="text-light fs-4">Room No:</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Room No:"
            />
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2"></div>
          <div className="col-2">
            <span className="text-light fs-4">Appointment No:</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Appointment No:"
            />
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2"></div>
          <div className="col-2">
            <span className="text-light fs-4">Doctor Name</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Doctor Name"
            />
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2"></div>
          <div className="col-2">
            <span className="text-light fs-4">Medical Section</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Medical Section"
            />
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-2"></div>
          <div className="col-2">
            <span className="text-light fs-4">Specialization</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Specialization"
            />
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2"></div>
          <div className="col-2">
            <span className="text-light fs-4">Time</span>
          </div>
          <div className="col-5 align-items-center d-flex ">
            <div>
              <span className="text-light fs-5 me-3">From</span>
              <input type="time" />
            </div>

            <div className="ms-5">
              <span className="text-light fs-5 me-3">To</span>
              <input type="time" />
            </div>
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2"></div>
          <div className="col-2">
            <span className="text-light fs-4">Date</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input type="date" className="form-control" />
          </div>
        </div>
      </form>

      <div className="row justify-content-end mb-1 mt-3">
        <div className="col-3 align-items-center d-flex">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row d-flex justify-content-center mt-1 ">
        <div
          className="col-8 "
          style={{ maxHeight: "8rem", overflowY: "scroll" }}
        >
          <Table striped bordered hover className="bg-white">
            <thead>
              <th>ID</th>
              <th>Doctor Name</th>
              <th>Specialization</th>
              <th>Medical Section</th>
              <th>Channeling ID</th>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => {
                return (
                  <tr key={i}>
                    <td>1</td>
                    <td>KAMAL</td>
                    <td>CHILD</td>
                    <td>AJA</td>
                    <td>002</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-2 ">
        <button onClick={e=>navigate(-1)} className="btn btn-primary  px-5 fs-4 bg-btn text-black fw-bold">
          Go Back
        </button>
        <div className="d-flex justify-content-end mb-2">
          <div>
            <button className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold">
              Update
            </button>
            <button className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold">
              Delete
            </button>
            <button className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default ManageChannelling;

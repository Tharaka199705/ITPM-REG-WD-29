import { Table } from "react-bootstrap";
import Background from "../../Background/Background";
import { Link , useNavigate} from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const ManageDoctor = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      doctor_name: "",
      specialization: "",
      medical_section: "",
    },
    validationSchema: Yup.object({
      doctor_name: Yup.string().required("*required"),
      specialization: Yup.string().required("*required"),
      medical_section: Yup.string().required("*required"),
    }),

    onSubmit: (values) => {
      //handle submission here
      console.log(values);
    },
  });



  return (
    <Background title="manage Doctor Details">
      <div className="d-flex justify-content-end mt-1">
      <Link to="/"><button className="btn btn-primary px-5 fs-4 bg-btn text-black fw-bold">
          Home
        </button></Link>
      </div>
      <form action="" onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>

        <div className="row my-3">
          <div className="col-2">
            <span className="text-light fs-4">Doctor Name</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Doctor Name"
              name="doctor_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.doctor_name}
            />
            {formik.touched.doctor_name && formik.errors.doctor_name ? (
              <span className="text-danger ms-3">
                {formik.errors.doctor_name}
              </span>
            ) : null}
          </div>
        </div>

        <div className="row my-3">
          <div className="col-2">
            <span className="text-light fs-4">Doctor Specialization</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Doctor Specialization"
              name="specialization"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.specialization}
            />
            {formik.touched.specialization && formik.errors.specialization ? (
              <span className="text-danger ms-3">
                {formik.errors.specialization}
              </span>
            ) : null}
          </div>
        </div>

        <div className="row my-3">
          <div className="col-2">
            <span className="text-light fs-4">Medical Section</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Medical Section"
              
              name="medical_section"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.medical_section}
            />
            {formik.touched.medical_section && formik.errors.medical_section ? (
              <span className="text-danger ms-3">
                {formik.errors.medical_section}
              </span>
            ) : null}
          </div>
        </div>
        
      
      <div className="row justify-content-end mb-2">
      <div className="col-3 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
            />
          </div>
          <div className="col-1"></div>
      </div>
      <div className="row d-flex justify-content-center mt-1 ">
        <div
          className="col-8 "
          style={{ maxHeight: "18rem", overflowY: "scroll" }}
        >
          <Table striped bordered hover className="bg-white">
            <thead>
              <tr>
              <th>ID</th>
              <th>Doctor Name</th>
              <th>Specialization</th>
              <th>Medical Section</th>
              <th>Channeling ID</th>
              </tr>
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
            <button name="save"
                type="submit" className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold">
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
      </form>
    </Background>
  );
};

export default ManageDoctor;

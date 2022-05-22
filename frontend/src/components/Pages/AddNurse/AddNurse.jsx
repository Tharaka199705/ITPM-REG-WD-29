import { Table } from "react-bootstrap";
import { Link , useNavigate} from "react-router-dom";
import Background from "../../Background/Background";
import * as Yup from "yup";
import { useFormik } from "formik";

const AddNurse = () => {

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      nurseName: "",
      nurseID: "",
      section: ""
    },
    validationSchema: Yup.object({
      nurseName: Yup.string().required("*required"),
      nurseID: Yup.string().required("*required"),
      section: Yup.string().required("*required")
    }),

    onSubmit: (values) => {
      //handle submission here
      console.log(values);
    },
  });


  return (
    <Background title="Add Nurse Details">
      <div className="d-flex justify-content-end mt-1">
      <Link to="/"><button className="btn btn-primary px-5 fs-4 bg-btn text-black fw-bold">
          Home
        </button></Link>
      </div>
      <form action="" onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>
        <div className="row ">
          <div className="col-2">
            <span className="text-light fs-4">Nurse ID</span>
          </div>
          <div className="col-3 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Nurse ID"
              name="nurseID"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nurseID}
            />
            {formik.touched.nurseID && formik.errors.nurseID ? (
              <span className="text-danger ps-3">
                {formik.errors.nurseID}
              </span>
            ) : null}
          </div>
        </div>

        <div className="row my-3">
          <div className="col-2">
            <span className="text-light fs-4">Nurse Name</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Nurse Name"
              name="nurseName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nurseName}
              
            />
            {formik.touched.nurseName && formik.errors.nurseName ? (
              <span className="text-danger ps-3">
                {formik.errors.nurseName}
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
              placeholder="Mrdical Section"
              name="section"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.section}
            />
            {formik.touched.section && formik.errors.section ? (
              <span className="text-danger ps-3">
                {formik.errors.section}
              </span>
            ) : null}
          </div>
        </div>

        
        
     
      <div className="row d-flex justify-content-center mt-5 ">
        <div
          className="col-8 "
          style={{ maxHeight: "15rem", overflowY: "scroll" }}
        >
          <Table striped bordered hover className="bg-white">
            <thead>
              <tr>
              <th>Nurse ID</th>
              <th>Nurse Name</th>
              <th>Medical Section</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => {
                return (
                  <tr key={i}>
                    <td>1</td>
                    <td>KAMAL</td>
                    <td>CHILD</td>
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
            <button name="submit" type="submit" className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold">
              Save
            </button>
            <button name="reset" type="reset" onClick={formik.handleReset} className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold">
              Clear
            </button>
            <button type="button" className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold">
              Generate Report
            </button>
          </div>
        </div>
      </div>
      </form>
    </Background>
  );
};

export default AddNurse;

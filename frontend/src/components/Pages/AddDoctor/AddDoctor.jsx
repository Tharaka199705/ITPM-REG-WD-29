import { useFormik } from "formik";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Background from "../../Background/Background";
import * as Yup from "yup";
const AddDoctor = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      doctor_id: "",
      doctor_name: "",
      specialization: "",
      medical_section: "",
      channeling_id: "",
    },
    validationSchema: Yup.object({
      doctor_id: Yup.string().required("*required"),
      doctor_name: Yup.string().required("*required"),
      specialization: Yup.string().required("*required"),
      medical_section: Yup.string().required("*required"),
      channeling_id: Yup.string().required("*required"),
    }),

    onSubmit: (values) => {
      //handle submission here
      console.log(values);
    },
  });

  return (
    <Background title="Add Doctor Details">
      <div className="d-flex justify-content-end mt-1">
        <Link to="/">
          <button className="btn btn-primary px-5 fs-4 bg-btn text-black fw-bold">
            Home
          </button>
        </Link>
      </div>
      <form action="" onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>
        <div className="row ">
          <div className="col-2">
            <span className="text-light fs-4">Doctor ID</span>
          </div>
          <div className="col-3 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Doctor ID"
              name="doctor_id"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.doctor_id}
            />
            {formik.touched.doctor_id && formik.errors.doctor_id ? (
              <span className="text-danger ps-3">
                {formik.errors.doctor_id}
              </span>
            ) : null}
          </div>
        </div>

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
        <div className="row my-3">
          <div className="col-2">
            <span className="text-light fs-4">Chanelling ID</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Chanelling ID"
              name="channeling_id"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.channeling_id}
            />{" "}
            {formik.touched.channeling_id && formik.errors.channeling_id ? (
              <span className="text-danger ms-3">
                {formik.errors.channeling_id}
              </span>
            ) : null}
          </div>
        </div>

        <div className="row d-flex justify-content-center mt-5 ">
          <div
            className="col-8 "
            style={{ maxHeight: "12rem", overflowY: "scroll" }}
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
          <button
            className="btn btn-primary  px-5 fs-4 bg-btn text-black fw-bold"
            onClick={(e) => navigate(-1)}
          >
            Go Back
          </button>
          <div className="d-flex justify-content-end mb-2">
            <div>
              <button
                name="save"
                type="submit"
                className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold"
              >
                Save
              </button>
              <button
                name="reset"
                type="reset"
                onClick={formik.handleReset}
                className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold"
              >
                Clear
              </button>
              <button
                type="button"
                className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold"
              >
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </form>
    </Background>
  );
};

export default AddDoctor;

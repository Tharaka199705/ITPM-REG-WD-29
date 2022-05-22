import { Table } from "react-bootstrap";
import Background from "../../Background/Background";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const ManagePatient = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      patientName: "",
      doctorName: "",
      specialization: "",
      medicalSection: "",
    },
    validationSchema: Yup.object({
      patientName: Yup.string().required("*required"),
      doctorName: Yup.string().required("*required"),
      specialization: Yup.string().required("*required"),
      medicalSection: Yup.string().required("*required"),
    }),

    onSubmit: (values) => {
      //handle submission here
      console.log(values);
    },
  });

  return (
    <Background title="Manage Patient Details">
      <div className="d-flex justify-content-end mt-1">
        <Link to="/">
          <button className="btn btn-primary px-5 fs-4 bg-btn text-black fw-bold">
            Home
          </button>
        </Link>
      </div>
      <form action="" onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>
        <div className="row my-3">
          <div className="col-2">
            <span className="text-light fs-4">Patient Name</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Patient Name"
              name="patientName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.patientName}
            />{" "}
            {formik.touched.patientName && formik.errors.patientName ? (
              <span className="text-danger ps-3">
                {formik.errors.patientName}
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
              name="doctorName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.doctorName}
            />
            {formik.touched.doctorName && formik.errors.doctorName ? (
              <span className="text-danger ps-3">
                {formik.errors.doctorName}
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
              <span className="text-danger ps-3">
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
              name="medicalSection"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.medicalSection}
            />
            {formik.touched.medicalSection && formik.errors.medicalSection ? (
              <span className="text-danger ps-3">
                {formik.errors.medicalSection}
              </span>
            ) : null}
          </div>
        </div>

        <div className="row justify-content-end mb-2">
          <div className="col-3 align-items-center d-flex">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row d-flex justify-content-center mt-1 ">
          <div
            className="col-8 "
            style={{ maxHeight: "12rem", overflowY: "scroll" }}
          >
            <Table striped bordered hover className="bg-white">
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Patient Name</th>
                  <th>Doctor Name</th>
                  <th>Specialization</th>
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
            onClick={(e) => navigate(-1)}
            className="btn btn-primary  px-5 fs-4 bg-btn text-black fw-bold"
          >
            Go Back
          </button>
          <div className="d-flex justify-content-end mb-2">
            <div>
              <button
                name="submit"
                type="submit"
                className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold"
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold"
              >
                Delete
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

export default ManagePatient;

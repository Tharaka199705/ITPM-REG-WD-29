import Background from "../../Background/Background";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const CountingSalary = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      staff: "",
      staffID: "",
      name: "",
      specialization: "",
      medicalSection: "",
      workingHours: "",
      workingDays: "",
      OT: "",
      salary: "",
    },
    validationSchema: Yup.object({
      staff: Yup.string().required("*required"),
      staffID: Yup.string().required("*required"),
      name: Yup.string().required("*required"),
      specialization: Yup.string().required("*required"),
      medicalSection: Yup.string().required("*required"),
      workingHours: Yup.string().required("*required"),
      workingDays: Yup.string().required("*required"),
      salary: Yup.string().required("*required"),
      OT: Yup.string().required("*required"),
    }),

    onSubmit: (values) => {
      //handle submission here
      console.log(values);
    },
  });

  return (
    <Background title="Counting Salary">
      <div className="d-flex justify-content-end mt-1">
        <Link to="/">
          <button className="btn btn-primary px-5 fs-4 bg-btn text-black fw-bold">
            Home
          </button>
        </Link>
      </div>
      <form action="" onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>
        <div className="row mb-4">
          <div className="col-2">
            <span className="text-light fs-4">Staff</span>
          </div>
          <div className="col-3 align-items-center d-flex justify-content-between">
            <div>
              <input
                type="radio"
                name="staff"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="doctor"
              />
              <span className="text-white ps-3 fs-5">Doctor</span>
            </div>
            <div>
              <input
                type="radio"
                name="staff"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="nurse"
              />
              <span className="text-white ps-3 fs-5">Nurse</span>
              {formik.touched.staff && formik.errors.staff ? (
                  <span className="text-danger ms-3">{formik.errors.staff}</span>
                ) : null}
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2">
            <span className="text-light fs-4">Staff ID</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Staff ID"
              name="staffID"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.staffID}
            />
            {formik.touched.staffID && formik.errors.staffID ? (
                  <span className="text-danger ms-3">{formik.errors.staffID}</span>
                ) : null}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2">
            <span className="text-light fs-4">Name</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                  <span className="text-danger ms-3">{formik.errors.name}</span>
                ) : null}
          </div>
        </div>

        <div className="row mb-4">
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
                  <span className="text-danger ms-3">{formik.errors.medicalSection}</span>
                ) : null}
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2">
            <span className="text-light fs-4">Specialization</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Specialization"
              name="specialization"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.specialization}
            />
            {formik.touched.specialization && formik.errors.specialization ? (
                  <span className="text-danger ms-3">{formik.errors.specialization}</span>
                ) : null}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2">
            <span className="text-light fs-4">Working Hours</span>
          </div>
          <div className="col-5 align-items-center d-flex ">
            <div>
              <input
                type="time"
                name="workingHours"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.workingHours}
              />
              {formik.touched.workingHours && formik.errors.workingHours ? (
                  <span className="text-danger ms-3">{formik.errors.workingHours}</span>
                ) : null}
            </div>

            <div className="ms-5">
              <span className="text-light fs-5 me-3">OT Hours</span>
              <input
                type="time"
                name="OT"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.OT}
              />
              {formik.touched.OT && formik.errors.OT ? (
                  <span className="text-danger ms-3">{formik.errors.OT}</span>
                ) : null}
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2">
            <span className="text-light fs-4">Working Days</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control w-25"
              name="workingDays"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.workingDays}
            />
            {formik.touched.workingHours && formik.errors.workingHours ? (
                  <span className="text-danger ms-3">{formik.errors.workingHours}</span>
                ) : null}
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2">
            <span className="text-light fs-4">Salary</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control w-25"
              placeholder="Rs"
              name="salary"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.salary}
            />
            {formik.touched.salary && formik.errors.salary ? (
                  <span className="text-danger ms-3">{formik.errors.salary}</span>
                ) : null}
          </div>
        </div>
     

      <div className="d-flex justify-content-between mt-5 ">
        <button
          onClick={(e) => navigate(-1)} type="button"
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
              Save
            </button>
            <button
              type="reset"
              name="clear"
              onClick={formik.handleReset}
              className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      </form>
    </Background>
  );
};

export default CountingSalary;

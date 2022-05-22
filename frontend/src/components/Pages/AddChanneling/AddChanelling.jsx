import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Background from "../../Background/Background";
import * as Yup from "yup";

const AddChannelling = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      room_type: "",
      appoinment_no: "",
      doctor_id: "",
      specialization: "",
      medical_section: "",
      time_to: "",
      time_from: "",
      date: "",
    },
    validationSchema: Yup.object({
      room_type: Yup.string().required("*required"),
      appoinment_no: Yup.string().required("*required"),
      doctor_id: Yup.string().required("*required"),
      specialization: Yup.string().required("*required"),
      medical_section: Yup.string().required("*required"),
      time_to: Yup.string().required("*required"),
      time_from: Yup.string().required("*required"),
      date: Yup.string().required("*required"),
    }),

    onSubmit: (values) => {
        //handle submission here
        console.log(values)

    },
  });

  return (
    <Background title="Add Channeling Details">
      <div className="d-flex justify-content-end mt-1">
        <Link to="/">
          <button className="btn btn-primary px-5 fs-4 bg-btn text-black fw-bold">
            Home
          </button>
        </Link>
      </div>
      <form action="" onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>
        <div className="row mb-4">
          <div className="col-2"></div>
          <div className="col-2">
            <span className="text-light fs-4">Room Type</span>
            
          </div>
          <div className="col-3 align-items-center d-flex justify-content-between">
            <div>
              <input
                type="radio"
                name="room_type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="room"
              />

              <span className="text-white ps-3 fs-5">Room</span>
            </div>
            <div>
              <input
                type="radio"
                name="room_type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="laboratory"
              />
              <span className="text-white ps-3 fs-5">Laboratory</span>
              {formik.touched.room_type && formik.errors.room_type ? (
                  <span className="text-danger ms-3">{formik.errors.room_type}</span>
                ) : null}
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2"></div>
          <div className="col-2">
            <span className="text-light fs-4">Appointment No:</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Appointment No:"
              name="appoinment_no"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.appoinment_no}
            />
            {formik.touched.appoinment_no && formik.errors.appoinment_no ? (
                  <span className="ms-3 text-danger">
                    {formik.errors.appoinment_no}
                  </span>
                ) : null}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2"></div>
          <div className="col-2">
            <span className="text-light fs-4">Doctor ID</span>
          </div>
          <div className="col-5 align-items-center d-flex">
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
                  <span className="ms-3 text-danger">{formik.errors.doctor_id}</span>
                ) : null}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2"></div>
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
            {formik.touched.medical_section &&
                formik.errors.medical_section ? (
                  <span className="ms-3 text-danger">
                    {formik.errors.medical_section}
                  </span>
                ) : null}
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2"></div>
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
            {formik.touched.specialization &&
                formik.errors.specialization ? (
                  <span className="ms-3 text-danger">
                    {formik.errors.specialization}
                  </span>
                ) : null}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2"></div>
          <div className="col-2">
            <span className="text-light fs-4">Time</span>
          </div>
          <div className="col-5 align-items-center d-flex ">
            <div>
              <span className="text-light fs-5 me-3">From</span>
              <input
                name="time_from"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.time_from}
                type="time"
              />
            </div>

            <div className="ms-5">
              <span className="text-light fs-5 me-3">To</span>
              <input
                name="time_to"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.time_to}
                type="time"
              />
              {(formik.touched.date || formik.touched.time_from || formik.touched.time_to) && (formik.errors.time_from || formik.errors.date || formik.errors.time_to)
                 ? (
                  <span className="text-danger">
                    {formik.errors.time_from || formik.errors.time_to || formik.errors.date}
                  </span>
                ) : null}
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2"></div>
          <div className="col-2">
            <span className="text-light fs-4">Date</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              name="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              type="date"
              className="form-control"
            />
            {(formik.touched.date || formik.touched.time_from || formik.touched.time_to) && (formik.errors.time_from || formik.errors.date || formik.errors.time_to)
                 ? (
                  <span className="ms-3 text-danger">
                    {formik.errors.time_from || formik.errors.time_to || formik.errors.date}
                  </span>
                ) : null}
          </div>
        </div>
      

      <div className="d-flex justify-content-between mt-5 ">
        <button
          className="btn btn-primary  px-5 fs-4 bg-btn text-black fw-bold"
          onClick={(e) => navigate(-1)}
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
            <button  type="reset" onClick={formik.handleReset} className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold">
              Clear
            </button>
          </div>
        </div>
      </div>
      </form>
    </Background>
  );
};

export default AddChannelling;

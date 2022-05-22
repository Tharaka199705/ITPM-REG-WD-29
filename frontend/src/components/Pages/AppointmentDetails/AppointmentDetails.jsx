import { Table } from "react-bootstrap";
import Background from "../../Background/Background";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const AppointmentDetails = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      appointmentType: "",
      appoinmentNo: "",
      doctorId: "",
      doctorName: "",
      specialization: "",
      medicalSection: "",
      time: "",
      date: "",
      patientName: "",
      patientPhone: "",
      roomNo: "",
    },
    validationSchema: Yup.object({
      appointmentType: Yup.string().required("*required"),
      appoinmentNo: Yup.string().required("*required"),
      doctorId: Yup.string().required("*required"),
      doctorName: Yup.string().required("*required"),
      specialization: Yup.string().required("*required"),
      medicalSection: Yup.string().required("*required"),
      time: Yup.string().required("*required"),
      date: Yup.string().required("*required"),
      patientName: Yup.string().required("*required"),
      patientPhone: Yup.string().required("*required"),
      roomNo: Yup.string().required("*required"),
    }),

    onSubmit: (values) => {
      //handle submission here
      console.log(values);
    },
  });

  return (
    <Background title="Appointment Details">
      <div className="d-flex justify-content-end mt-1">
        <Link to="/">
          <button className="btn btn-primary px-5 fs-4 bg-btn text-black fw-bold">
            Home
          </button>
        </Link>
      </div>
      <div className="row">
        <form
          className="col-6"
          action=""
          onSubmit={formik.handleSubmit}
          onBlur={formik.handleBlur}
        >
          <div className="row mb-1">
            <div className="col-4">
              <span className="text-light fs-4">Appointment Type</span>
            </div>
            <div className="col-8 align-items-center d-flex justify-content-between">
              <div>
                <input
                  type="radio"
                  name="appointmentType"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value="doctor"
                />
                <span className="text-white ps-3 fs-5">Meet a doctor</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="appointmentType"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value="laboratory"
                />
                <span className="text-white ps-3 fs-5">Laboratory</span>
                {formik.touched.appointmentType && formik.errors.appointmentType ? (
                  <span className="text-danger ms-3">{formik.errors.appointmentType}</span>
                ) : null}
              </div>
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-4">
              <span className="text-light fs-4">Appointment No:</span>
            </div>
            <div className="col-8 align-items-center d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Appointment No:"
                name="appoinmentNo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.appoinmentNo}
              />
              {formik.touched.appoinmentNo && formik.errors.appoinmentNo ? (
                  <span className="text-danger ms-3">{formik.errors.appoinmentNo}</span>
                ) : null}
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-4">
              <span className="text-light fs-4">Doctor ID</span>
            </div>
            <div className="col-8 align-items-center d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Doctor ID"
                name="doctorId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.doctorId}
              />
              {formik.touched.doctorId && formik.errors.doctorId ? (
                  <span className="text-danger ms-3">{formik.errors.doctorId}</span>
                ) : null}
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-4">
              <span className="text-light fs-4">Doctor Name</span>
            </div>
            <div className="col-8 align-items-center d-flex">
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
                  <span className="text-danger ms-3">{formik.errors.doctorName}</span>
                ) : null}
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-4">
              <span className="text-light fs-4">Medical Section</span>
            </div>
            <div className="col-8 align-items-center d-flex">
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
          <div className="row mb-1">
            <div className="col-4">
              <span className="text-light fs-4">Specialization</span>
            </div>
            <div className="col-8 align-items-center d-flex">
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

          <div className="row mb-1">
            <div className="col-4">
              <span className="text-light fs-4">Time</span>
            </div>
            <div className="col-8 align-items-center d-flex justify-content-between ">
              <input
                type="time"
                className="form-control w-25"
                name="time"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.time}
              />
              {formik.touched.time && formik.errors.time ? (
                  <span className="text-danger ms-3">{formik.errors.time}</span>
                ) : null}

              <div className="d-flex">
                <span className="text-light fs-4 ms-5">Date</span>
                <input
                  type="date"
                  className="form-control ms-2 w-75"
                  name="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
                />
                {formik.touched.date && formik.errors.date ? (
                  <span className="text-danger ms-3">{formik.errors.date}</span>
                ) : null}
              </div>
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-4">
              <span className="text-light fs-4">Patient Name</span>
            </div>
            <div className="col-8 align-items-center d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Patient Name"
                name="patientName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.patientName}
              />
              {formik.touched.patientName && formik.errors.patientName ? (
                  <span className="text-danger ms-3">{formik.errors.patientName}</span>
                ) : null}
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-4">
              <span className="text-light fs-4">Patient Phone</span>
            </div>
            <div className="col-8 align-items-center d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Patient Phone"
                name="patientPhone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.patientPhone}
              />
              {formik.touched.patientPhone && formik.errors.patientPhone ? (
                  <span className="text-danger ms-3">{formik.errors.patientPhone}</span>
                ) : null}
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-4">
              <span className="text-light fs-4">Room No:</span>
            </div>
            <div className="col-8 align-items-center d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Room No:"
                name="roomNo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.roomNo}
              />
              {formik.touched.roomNo && formik.errors.roomNo ? (
                  <span className="text-danger ms-3">{formik.errors.roomNo}</span>
                ) : null}
            </div>
          </div>
          <div className="d-flex justify-content-end mt-5">
            <div>
              <button
                name="submit"
                type="submit"
                className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold"
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold"
              >
                Delete
              </button>
              <button
                type="reset"
                name="clear"
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
        </form>

        <div className="col-6">
          <div className="row justify-content-end mb-1 mt-3">
            <div className="col-5 align-items-center d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row d-flex justify-content-center mt-1 ">
            <div
              className="col-8 "
              style={{ maxHeight: "25rem", overflowY: "scroll" }}
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
        </div>
      </div>

      <div className="d-flex justify-content-between mt-2 ">
        <button
          onClick={(e) => navigate(-1)}
          className="btn btn-primary  px-5 fs-4 bg-btn text-black fw-bold"
        >
          Go Back
        </button>
      </div>
    </Background>
  );
};

export default AppointmentDetails;

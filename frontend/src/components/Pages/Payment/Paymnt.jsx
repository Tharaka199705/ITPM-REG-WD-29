import { Table } from "react-bootstrap";
import Background from "../../Background/Background";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const Payment = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      patientID: "",
      channelingFee: "",
      labfee: "",
      medfee: "",
      total: "",
      cashType: "",
    },
    validationSchema: Yup.object({
      patientID: Yup.string().required("*required"),
      channelingFee: Yup.string().required("*required"),
      labfee: Yup.string().required("*required"),
      medfee: Yup.string().required("*required"),
      total: Yup.string().required("*required"),
      cashType: Yup.string().required("*required"),
    }),

    onSubmit: (values) => {
      //handle submission here
      console.log(values);
    },
  });

  return (
    <Background title="Payment Details">
      <div className="d-flex justify-content-end mt-1">
        <Link to="/">
          <button className="btn btn-primary px-5 fs-4 bg-btn text-black fw-bold">
            Home
          </button>
        </Link>
      </div>
      <form action="" onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>
        <div className="row mb-1">
          <div className="col-2">
            <span className="text-light fs-4">Patient ID</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Patient ID"
              name="patientID"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.patientID}
            />
            {formik.touched.patientID && formik.errors.patientID ? (
              <span className="text-danger ms-3">
                {formik.errors.patientID}
              </span>
            ) : null}
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2">
            <span className="text-light fs-4">Channelling Fee</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Rs"
              name="channelingFee"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.channelingFee}
            />{" "}
            {formik.touched.channelingFee && formik.errors.channelingFee ? (
              <span className="text-danger ms-3">
                {formik.errors.channelingFee}
              </span>
            ) : null}
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2">
            <span className="text-light fs-4">Laboratory Fee</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Rs"
              name="labfee"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.labfee}
            />{" "}
            {formik.touched.labfee && formik.errors.labfee ? (
              <span className="text-danger ms-3">{formik.errors.labfee}</span>
            ) : null}
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2">
            <span className="text-light fs-4">Medicine Fee</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Rs"
              name="medfee"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.medfee}
            />{" "}
            {formik.touched.medfee && formik.errors.medfee ? (
              <span className="text-danger ms-3">{formik.errors.medfee}</span>
            ) : null}
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-2">
            <span className="text-light fs-4">Total</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Rs"
              name="total"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.total}
            />{" "}
            {formik.touched.total && formik.errors.total ? (
              <span className="text-danger ms-3">{formik.errors.total}</span>
            ) : null}
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2">
            <span className="text-light fs-4">Payment Type</span>
          </div>
          <div className="col-3 align-items-center d-flex justify-content-between">
            <div>
              <input
                type="radio"
                name="cashType"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="cash"
              />
              <span className="text-white ps-3 fs-5">Cash</span>
            </div>
            <div>
              <input
                type="radio"
                name="cashType"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="card"
              />{" "}
              <span className="text-white ps-3 fs-5">card</span>
              {formik.touched.cashType && formik.errors.cashType ? (
                <span className="text-danger ms-3">
                  {formik.errors.cashType}
                </span>
              ) : null}
            </div>
          </div>
        </div>

        <div className="row justify-content-end mb-1 mt-3">
          <div className="col-3 align-items-center d-flex">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row d-flex justify-content-center mt-1 ">
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
          type="button"
            onClick={(e) => navigate(-1)}
            className="btn btn-primary  px-5 fs-4 bg-btn text-black fw-bold"
          >
            Go Back
          </button>
          <div className="d-flex justify-content-end mb-2">
            <div>
              <button
                name="reset"
                type="reset"
                onClick={formik.handleReset}
                className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold"
              >
                Clear
              </button>
              <button
                name="submit"
                type="submit"
                className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold"
              >
                Save
              </button>
              <button className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold">
                Generate Bill
              </button>
            </div>
          </div>
        </div>
      </form>
    </Background>
  );
};

export default Payment;

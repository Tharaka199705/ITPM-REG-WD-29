import { Table } from "react-bootstrap";
import Background from "../../Background/Background";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const PharmacyDetails = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      medType: "",
      brand: "",
      code: "",
      geneticName: "",
      strength: "",
      quality: "",
      type: "",
    },
    validationSchema: Yup.object({
      medType: Yup.string().required("*required"),
      brand: Yup.string().required("*required"),
      code: Yup.string().required("*required"),
      geneticName: Yup.string().required("*required"),
      strength: Yup.string().required("*required"),
      quality: Yup.string().required("*required"),
      type: Yup.string().required("*required"),
    }),

    onSubmit: (values) => {
      //handle submission here
      console.log(values);
    },
  });

  return (
    <Background title="Pharmacy Details">
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
            <span className="text-light fs-4">Medicine Type</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="medType"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.medType}
            />
            {formik.touched.medType && formik.errors.medType ? (
              <span className="text-danger ms-3">{formik.errors.medType}</span>
            ) : null}
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2">
            <span className="text-light fs-4">Brand Name</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="brand"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.brand}
            />
            {formik.touched.brand && formik.errors.brand ? (
              <span className="text-danger ms-3">{formik.errors.brand}</span>
            ) : null}
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2">
            <span className="text-light fs-4">Brand Code</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="code"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.code}
            />
            {formik.touched.code && formik.errors.code ? (
              <span className="text-danger ms-3">{formik.errors.code}</span>
            ) : null}
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2">
            <span className="text-light fs-4">Genetic Name</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="geneticName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.geneticName}
            />
            {formik.touched.geneticName && formik.errors.geneticName ? (
              <span className="text-danger ms-3">
                {formik.errors.geneticName}
              </span>
            ) : null}
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-2">
            <span className="text-light fs-4">Strength</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="mg"
              name="strength"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.strength}
            />
            {formik.touched.strength && formik.errors.strength ? (
              <span className="text-danger ms-3">{formik.errors.strength}</span>
            ) : null}
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2">
            <span className="text-light fs-4">Quality</span>
          </div>
          <div className="col-5 align-items-center d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="mg"
              name="quality"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.quality}
            />
            {formik.touched.quality && formik.errors.quality ? (
              <span className="text-danger ms-3">{formik.errors.quality}</span>
            ) : null}
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-2"></div>
          <div className="col-3 align-items-center d-flex justify-content-between">
            <div>
              <input
                type="radio"
                name="type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="oral"
              />
              <span className="text-white ps-3 fs-5">Oral</span>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="external"
              />
              <span className="text-white ps-3 fs-5">External</span>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="drug"
              />
              <span className="text-white ps-3 fs-5">Drug</span>
              {formik.touched.type && formik.errors.type ? (
                <span className="text-danger ms-3">{formik.errors.type}</span>
              ) : null}
            </div>
          </div>
        </div>

        <div className="row justify-content-end mb-1 ">
          <div className="col-3 align-items-center d-flex">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row d-flex justify-content-center  ">
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
                type="submit"
                name="submit"
                className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold"
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-primary mx-1  fs-5 bg-btn text-black fw-bold"
              >
                Generate Bill
              </button>
            </div>
          </div>
        </div>
      </form>
    </Background>
  );
};

export default PharmacyDetails;

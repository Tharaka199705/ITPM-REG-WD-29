import Background from "../../Background/Background";
import staff from '../../../img/staff.PNG';
import salary from '../../../img/salary.PNG';
import patient from '../../../img/patient.PNG';
import channeling from '../../../img/channeling.PNG';
import pharmacy from '../../../img/pharmacy.PNG';
import location from '../../../img/addlocation.PNG';
import apointment from '../../../img/appointment.PNG';
import laboratary from '../../../img/laboratary.PNG';
import payment from '../../../img/payment.PNG';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Background title={"Neeroga Medical Center"}>
      <div className="row">
        <div className="col-10 text-light ">
          <div className="row mt-5 ">
            <div className="col-3"><Link to="/staff"><img src={staff} alt="" /></Link> </div>
            <div className="col-3"> <Link to="/patient"><img src={patient} alt="" /></Link></div>
            <div className="col-3"> <Link to="/channelling/add"><img src={channeling} alt="" /></Link></div>
            <div className="col-3"> <Link to="/pharmacy"><img src={pharmacy} alt="" /></Link></div>
          </div>

          <div className="row mt-5 pt-4">
            <div className="col-3"> <img src={location} alt="" /></div>
            <div className="col-3"> <Link to="/appointment"><img src={apointment} alt="" /></Link></div>
            <div className="col-3"> <img src={laboratary} alt="" /></div>
            <div className="col-3"> <Link to="/payment"><img src={payment} alt="" /></Link></div>
          </div>

        </div>
        <div className="col-2 mt-5 ">
        <div className="col-3 "> <Link to="/salary"><img src={salary} alt="" /></Link></div>
        </div>
      </div>
    </Background>
  );
};

export default Home;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddChannelling from './components/Pages/AddChanneling/AddChanelling';
import AddDoctor from './components/Pages/AddDoctor/AddDoctor';
import AddNurse from './components/Pages/AddNurse/AddNurse';
import AddPatient from './components/Pages/AddPatient/AddPatient';
import AppointmentDetails from './components/Pages/AppointmentDetails/AppointmentDetails';
import CountingSalary from './components/Pages/CountingSalary/CountingSalary';
import DoctorManagementWelcome from './components/Pages/DoctorManagementWelcome/DoctorManagementWelcome';
import Home from './components/Pages/Home/Home';
import ManageChannelling from './components/Pages/ManageChanelling/ManageChanelling';
import ManageDoctor from './components/Pages/ManageDoctor/ManageDoctor';
import ManageNurse from './components/Pages/ManageNurse/ManageNurse';
import ManagePatient from './components/Pages/ManagePatient/ManagePatient';
import ManageSalary from './components/Pages/ManageSalary/manageSalary';
import NurseManagementWelcome from './components/Pages/NurseManagementWelcome/NurseManagementWelcome';
import PatientManagementWelcome from './components/Pages/PatientManagementWelcome/ParientManagementWelcome';
import Payment from './components/Pages/Payment/Paymnt';
import PharmacyDetails from './components/Pages/PharmacyDetails/PharmacyDetails';
import SalaryManagementWelcome from './components/Pages/SalaryManagementWelcome/SalarymanagementWelcome';
import StaffManageWelcome from './components/Pages/StaffManageWelcome/StaffManagewelcome';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/staff' element={<StaffManageWelcome/>}/>
        <Route path='/staff/doctor' element={<DoctorManagementWelcome/>}/>
        <Route path='/staff/doctor/add' element={<AddDoctor/>}/>
        <Route path='/staff/doctor/manage' element={<ManageDoctor/>}/>
        <Route path='/staff/nurse' element={ <NurseManagementWelcome/>}/>
        <Route path='/staff/nurse/add' element={<AddNurse/>}/>
        <Route path='/staff/nurse/manage' element={<ManageNurse/>}/>
        <Route path='/patient' element={<PatientManagementWelcome/>}/>
        <Route path='/patient/add' element={<AddPatient/> }/>
        <Route path='/patient/manage' element={<ManagePatient/> }/>
        <Route path='/channelling/add' element={<AddChannelling/> }/>
        <Route path='/channelling/manage' element={<ManageChannelling/> }/>
        <Route path='/payment' element={<Payment/> }/>
        <Route path='/pharmacy' element={<PharmacyDetails/> }/>
        <Route path='/appointment' element={<AppointmentDetails/> }/>
        <Route path='/salary' element={<SalaryManagementWelcome/> }/>
        <Route path='/salary/count' element={<CountingSalary/> }/>
        <Route path='/salary/manage' element={<ManageSalary/> }/>
      </Routes>
    </div>
  );
}

export default App;

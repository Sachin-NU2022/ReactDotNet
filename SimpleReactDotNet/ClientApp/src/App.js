import EmployeeList from "./components/EmployeeList";
import RegisterStaff from "./components/RegisterStaff";
import Home from "./components/Home";
import { Route, Routes } from 'react-router';
import { Layout } from "./components/Layout";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import Employee from "./components/Employee";
import { MainPage } from "./components/MainPage";
import UpdateEmployee from "./components/UpdateEmployee";

const App = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<RegisterStaff />} />
                <Route path="/employeeList" element={<EmployeeList />} />
                <Route path="/fetchData" element={<FetchData />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/update/:empid" element={<UpdateEmployee />} />
            </Routes>            
        </div>
    )
}

export default App;
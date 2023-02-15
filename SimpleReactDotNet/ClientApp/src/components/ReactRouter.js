import React from 'react';
import { Route, Routes} from 'react-router';
import EmployeeList from './EmployeeList';

const ReactRouter = () => {
    return (
        <div>
            <h1>React Router</h1>
            <Routes>
                <Route path="/employeelist" element={<EmployeeList />} />
            </Routes>
        </div>
    );
}

export default ReactRouter;
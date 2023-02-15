import { Container } from "reactstrap";
import EmployeeList from "./EmployeeList";

const Employee = () => {
    return (
        <div>
            <Container>
                <h1>Employee Information</h1>
                <EmployeeList />
            </Container>           
        </div>
    )
}

export default Employee;
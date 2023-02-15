import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const RegisterStaff = () => {

    const navigate = useNavigate();
    const [staffName, setStaffName] = useState();
    const [staffEmail, setStaffEmail] = useState();
    const [staffAddress, setStaffAddress] = useState();
    const [phoneNo, setPhoneNo] = useState();

    const post = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                staffName: staffName,
                staffEmail: staffEmail,
                staffAddress: staffAddress,
                phoneNo: phoneNo
            }),
        };
        fetch("api/employee/Register", requestOptions)
            .then((response) => response.text())
            .then((res) => { })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/employee");
        window.location.reload();        
    }

    return (
        <div>
            <Container>
                <h1>Employee Registration Form</h1>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        {/*<Label >Staff Id</Label>*/}
                        {/*<Input name="StaffId" type="int" onChange={(e)=> setStaffId(e.target.value)} />*/}
                    </FormGroup>
                    <FormGroup>
                        <Label >Staff Name</Label>
                        <Input name="StaffName" type="text" onChange={(e) => setStaffName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label >Staff Email</Label>
                        <Input name="StaffEmail" type="email" onChange={(e) => setStaffEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label >Staff Address</Label>
                        <Input name="StaffAddress" type="text" onChange={(e) => setStaffAddress(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label >Staff Phone Number</Label>
                        <Input name="PhoneNo" pattern="[0-9]*" minLength="10" onChange={(e) => setPhoneNo(e.target.value)} />
                    </FormGroup>
                    <Button type="submit" onClick={() => post()}>Submit</Button><br />
                    <Button type="reset" className="btn btn-danger">Reset</Button>
                    </Form>
            </Container>
        </ div>
    )
}

export default RegisterStaff;
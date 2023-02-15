import React, { useState, useEffect } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmployee = () => {

    const navigate = useNavigate();
    const [staffId, setStaffId] = useState("");
    const [staffName, setStaffName] = useState("");
    const [staffEmail, setStaffEmail] = useState("");
    const [staffAddress, setStaffAddress] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const { empid } = useParams();    

    useEffect(() => {
        fetch(`api/employee/Getemployees/${empid}`).then((response) => {
            return response.json();
        }).then((res) => {
            setStaffId(res.staffId)
            setStaffName(res.staffName);
            setStaffEmail(res.staffEmail);
            setStaffAddress(res.staffAddress);
            setPhoneNo(res.phoneNo);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = { staffId, staffName, staffEmail, staffAddress, phoneNo };
        fetch(`api/employee/GetEmployees/${empid}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(requestOptions)
        }).then(() => {
            alert("saved successfully.")
            navigate("/employee", { replace: true });
        }).catch((err) => {
            console.log(err.message);
        })            
    }

    return (
        <div>
            <Container>
                <h1>Employee Registration Form</h1>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label >Staff Id</Label>
                        <Input value={staffId} name="StaffId" type="int" disabled="disabled" onChange={(e) => setStaffId(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label >Staff Name</Label>
                        <Input value={staffName} type="text" onChange={(e) => setStaffName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label >Staff Email</Label>
                        <Input value={staffEmail} name="StaffEmail" type="email" onChange={(e) => setStaffEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label >Staff Address</Label>
                        <Input value={staffAddress} name="StaffAddress" type="text" onChange={(e) => setStaffAddress(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label >Staff Phone Number</Label>
                        <Input value={phoneNo} name="PhoneNo" pattern="[0-9]*" minLength="10" onChange={(e) => setPhoneNo(e.target.value)} />
                    </FormGroup>
                    <Button type="submit">Submit</Button><br />
                    <Button type="reset" className="btn btn-danger">Reset</Button>
                </Form>
            </Container>
        </ div>
    )
}

export default UpdateEmployee;
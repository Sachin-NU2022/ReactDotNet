import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeList = () => {

    const navigate = useNavigate();

    //1 create useState
    const [staffs, setStaffs] = useState([]);

    //2 call api
    useEffect(() => {
        fetch("api/employee/GetEmployees")
            .then(response => { return response.json() })
            .then(responseJson => {

                setStaffs(responseJson)
            })
    },[])

    const updateButton = (id) => {
        navigate(`/update/${id}`)
    }

    const deleteHandler = (id) => {
        fetch(`api/employee/GetEmployees/${id}`, {
            method: 'DELETE',
        }).then(() => {
            alert("Removed Successfully!!!.");
            window.location.reload();
        })
    }

    //3.- create div and table
    return (
        <div>
            <Link to="/register" className="btn btn-success">Create New User</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Staff Id</th>
                        <th>Staff Name</th>
                        <th>Staff Email</th>
                        <th>Staff Address</th>
                        <th>Staff PhoneNo.</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        staffs.map((item, index) => (
                            <tr key={index.toString()}>
                                <td>{item.staffId}</td>
                                <td>{item.staffName}</td>
                                <td>{item.staffEmail}</td>
                                <td>{item.staffAddress}</td>
                                <td>{item.phoneNo}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => updateButton(item.staffId)}
                                    >
                                        Edit
                                    </button><br />
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => deleteHandler(item.staffId)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList;

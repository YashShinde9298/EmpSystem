import { useState, useEffect } from 'react';
import axios from "axios";

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    // async function fetchData() {
    //     const response = await axios.get("http://127.0.0.1:9298/dashboard/");
    //     setData(response.data);
    // }

    const fetchData = () => {
        axios.get("http://127.0.0.1:9298/dashboard/")
            .then((response) => {
                console.log(response)
                setData(response.data);
            })
    }


    const deleteEmp = (empid) => {
        axios.delete("http://127.0.0.1:9298/delete/" + empid)
            .then((response) => {
                console.log(response);
            })
    }

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Emp Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile No.</th>
                    <th>Gender</th>
                    <th>Salary</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((emp) => (
                    <tr key={emp.empid}>
                        <td>{emp.empid}</td>
                        <td>{emp.firstname}</td>
                        <td>{emp.lastname}</td>
                        <td>{emp.email}</td>
                        <td>{emp.phone}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.role}</td>
                        <td><button onClick={() => { deleteEmp(emp.empid) }}>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>

    </>);
}

export default Dashboard;
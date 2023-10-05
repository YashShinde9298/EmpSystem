import axios from "axios";
import { useState } from "react";
// import {useNavigate} from 'react-router-dom';

function AddEmp() {
    const [emp, setEmp] = useState({ firstname: "", lastname: "", email: "", phone: "", gender: "", salary: "", role: "" });
    // const navigate = useNavigate();

    const insertData = (e) => {
        e.preventDefault();
        const empData = {
            firstname: emp.firstname,
            lastname: emp.lastname,
            email: emp.email,
            phone: emp.phone,
            gender: emp.gender,
            salary: emp.salary,
            role: emp.role
        };
        axios.post("http://127.0.0.1:9298/add/", empData)
        .then((response) => {
            setEmp(response.data);
        })
    }

    const handleChange = (args) => {
        setEmp({ ...emp, [args.target.name]: args.target.value });
    }

    return (<>
        <form onSubmit={insertData}>
            <input type="text" name="firstname" placeholder="Firstname" onChange={handleChange} />
            <input type="text" name="lastname" placeholder="Lastname" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="number" name="phone" placeholder="Mobile No." onChange={handleChange} />
            Select Gender :
            <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
            <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
            <input type="radio" name="gender" value="Others" onChange={handleChange} /> Others
            <input type="number" name="salary" placeholder="Salary" onChange={handleChange} />
            <input type="text" name="role" placeholder="Role" onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>
    </>);
}

export default AddEmp;
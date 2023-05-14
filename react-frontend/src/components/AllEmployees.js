import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {APIs} from "../const/APIs";

export const AllEmployees = () => {
    const [employees, setEmployees] = useState([])
    const navigate = useHistory()

    const fetchEmployees = async () => {
        await axios.get(APIs.EMPLOYEES.GET_ALL).then(res => {
            setEmployees(res.data)
        }).catch(err => {
            alert(err)
        })
    }
    const deleteEmployee = async (e, id) => {
        e.preventDefault()
        await axios.delete(APIs.EMPLOYEES.DELETE + `/${id}`).then(res => {
            fetchEmployees()
        }).catch(err => {
            alert(err)
        })
    }
    useEffect(() => {
        fetchEmployees()
    }, [])

    function routeToUpdate(e, id) {
        e.preventDefault()
        navigate.push(`/update-employee/${id}`)
    }

    return (<>
            <h1 className={"text-center"}>Employee List</h1>
            <Link to={"/add-employee"}>
                <button className="btn-primary btn-lg">+</button>
            </Link>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Operations</th>
                </tr>
                </thead>
                <tbody>
                {employees.map(employee => {
                    return <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <Link to={`/update-employee/${employee.id}`}>
                                <button
                                    className="btn btn-primary btn-sm">Update Employee
                                </button>
                            </Link>
                            <button onClick={(e) => deleteEmployee(e, employee.id)}
                                    className="btn btn-danger btn-sm ml-2">Delete Employee
                            </button>
                            <Link to={`/view-employee/${employee.id}`}>
                                <button className="btn btn-info btn-sm ml-2">View Employee</button>
                            </Link>
                        </td>
                    </tr>
                })
                }


                </tbody>
            </Table>
        </>
    )
}

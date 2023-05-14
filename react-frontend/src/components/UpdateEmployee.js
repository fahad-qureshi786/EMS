import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {APIs} from "../const/APIs";
import {useHistory, useParams} from "react-router-dom";

export const UpdateEmployee = () => {
    const [employee, setEmployee] = useState({
        id: '',
        firstName: "",
        lastName: "",
        email: ""
    })
    const {id} = useParams();
    const navigation = useHistory();
    const findEmployeeById = async (id) => {
        await axios.get(APIs.EMPLOYEES.FIND_BY_ID + `/${id}`).then(res => {
            setEmployee(res.data)
        }).catch(err => {
            alert(err)
        })
    }

    async function submitEmployeeDetails(e) {
        e.preventDefault()
        await axios.put(APIs.EMPLOYEES.UPDATE, employee).then(res => {
            setEmployee({
                firstName: "",
                lastName: "",
                email: ""
            })
            navigation.push("/")
        }).catch(err => {
            console.log(err)
            alert(err)
        })
    }

    useEffect(() => {
        findEmployeeById(id)
    }, [])


    return (
        <>
            <div className="d-flex container card mt-5 justify-content-center">
                <h1 className="text-center">Update Employee Record</h1>
                <Form>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 col-md-12">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control value={employee.firstName}
                                              onChange={(e) => setEmployee({...employee, firstName: e.target.value})}
                                              type="text" placeholder="First Name"/>
                            </Form.Group>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-md-12">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control value={employee.lastName}
                                              onChange={(e) => setEmployee({...employee, lastName: e.target.value})}
                                              type="text" placeholder="Last Name"/>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 col-md-12">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control value={employee.email}
                                              onChange={(e) => setEmployee({...employee, email: e.target.value})}
                                              type="email" placeholder="example@example.com"/>
                            </Form.Group>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-md-12">
                            <Form.Label>To Submit</Form.Label>
                            <Button onClick={(e)=> submitEmployeeDetails(e)} className={"w-100"} variant="primary">
                                Click Me
                            </Button>
                        </div>
                    </div>

                </Form>
            </div>
        </>
    )
}

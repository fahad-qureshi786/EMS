import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {APIs} from "../const/APIs";
import {useHistory} from 'react-router-dom'
export const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })
    const navigate = useHistory()

    async function submitEmployeeDetails(e) {
      await axios.post(APIs.EMPLOYEES.ADD, employee).then(res=> {
          setEmployee({
              firstName: "",
              lastName: "",
              email: ""
          })
          navigate.push("/")
      }).catch(err=> {
          console.log(err)
          alert(err)
      })
    }

    return (
        <>
            <div className="d-flex container card mt-5 justify-content-center">
                <h1 className="text-center">Add New Employee Record</h1>
                <Form>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 col-md-12">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control value={employee.firstName} onChange={(e)=> setEmployee({...employee, firstName: e.target.value})} type="text" placeholder="First Name" />
                            </Form.Group>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-md-12">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control value={employee.lastName} onChange={(e)=> setEmployee({...employee, lastName: e.target.value})} type="text" placeholder="Last Name" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 col-md-12">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control value={employee.email} onChange={(e)=> setEmployee({...employee, email: e.target.value})} type="email" placeholder="example@example.com" />
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

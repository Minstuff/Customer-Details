import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';

function CreateCustomer() {
    const [custname, setName] = useState("");
    const [custNum, setNum] = useState("");
    const [city, setCity] = useState("");
    const [state, setState1] = useState("");
    const [pincode, setPincode] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        // Destructure data object to get individual values
        const { namee, numberr, city, state, pincode } = data;

        axios.post("http://localhost:3001/createCust", {
            custname: namee,  // <-- Match the server variable name
            custNum: numberr,
            city,
            state,
            pincode
        })
        .then(() => {
            alert("Customer added");
            navigate('/');
            console.log(data);
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Add user</h2>

                    {/* For customer name */}
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="namee"
                            onChange={(e) => setName(e.target.value)}
                            {...register("namee", {
                                required: "First name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters long",
                                },
                            })}
                        />
                        {errors && errors.namee && (
                            <p style={{ color: "red" }}>{errors.namee.message}</p>
                        )}
                    </Form.Group>

                    {/* Customer Number */}
                    <Form.Group>
                        <Form.Label>Customer Number</Form.Label>
                        <Form.Control
                            type="number"
                            id="numberr"
                            onChange={(e) => setNum(e.target.value)}
                            {...register("numberr", {
                                required: "Customer number is required",
                                pattern: {
                                    value: /^[0-9]{4}$/,
                                    message: "Please enter a 4-digit numeric customer number",
                                },
                            })}
                        />
                        {errors && errors.numberr && (
                            <p style={{ color: "red" }}>{errors.numberr.message}</p>
                        )}
                    </Form.Group>

                    {/* City */}
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            id="city"
                            onChange={(e) => setCity(e.target.value)}
                            {...register("city", {
                                required: "City is required",
                                minLength: {
                                    value: 3,
                                    message: "City must be at least 3 characters long",
                                },
                            })}
                        />
                        {errors && errors.city && (
                            <p style={{ color: "red" }}>{errors.city.message}</p>
                        )}
                    </Form.Group>

                    {/* State */}
                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="text"
                            id="state"
                            onChange={(e) => setState1(e.target.value)}
                            {...register("state", {
                                required: "State is required",
                                minLength: {
                                    value: 3,
                                    message: "State must be at least 3 characters long",
                                },
                            })}
                        />
                        {errors && errors.state && (
                            <p style={{ color: "red" }}>{errors.state.message}</p>
                        )}
                    </Form.Group>

                    {/* Pincode */}
                    <Form.Group>
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control
                            type="number"
                            id="pincode"
                            onChange={(e) => setPincode(e.target.value)}
                            {...register("pincode", {
                                required: "Pincode is required",
                                pattern: {
                                    value: /^[0-9]{4}$/,
                                    message: "Please enter a 4-digit numeric pincode",
                                },
                            })}
                        />
                        {errors && errors.pincode && (
                            <p style={{ color: "red" }}>{errors.pincode.message}</p>
                        )}
                    </Form.Group>
                    <input type="submit" />
                </Form>
            </div>
        </div>
    )
}

export default CreateCustomer;

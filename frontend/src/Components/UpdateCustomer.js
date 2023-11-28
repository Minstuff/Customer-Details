import React from "react";
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react";

function UpdateUser(){
    const{id}= useParams()
    const [custname, setName] = useState("");
    const [custNum, setNum] = useState("");
    const [city, setCity] = useState("");
    const [state, setState1] = useState("");
    const [pincode, setPincode] = useState("");
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result=> {
            console.log(result)
            setName(result.data.custname)
            setNum(result.data.custNum)
            setCity(result.data.city)
            setState1(result.data.state)
            setPincode(result.data.pincode)
        })
        .catch(err=>console.log(err))
    },[])

    const Update=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id,{custname, custNum, city, state, pincode})
        .then(result=>{
            console.log(result)
            navigate('/')
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update user</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                        value={custname} onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Customer number</label>
                        <input type="number" placeholder="Enter number" className="form-control"
                        value={custNum} onChange={(e)=> setNum(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">City</label>
                        <input type="text" placeholder="Enter city" className="form-control"
                        value={city} onChange={(e)=> setCity(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">State</label>
                        <input type="text" placeholder="Enter state" className="form-control"
                        value={state} onChange={(e)=> setState1(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Pincode</label>
                        <input type="number" placeholder="Enter pincode" className="form-control"
                        value={pincode} onChange={(e)=> setPincode(e.target.value)}/>
                        
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
           
        </div>
    )
}

export default UpdateUser;
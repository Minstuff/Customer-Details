import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Customer() {
  const [customers, setCust] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(result => setCust(result.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteCust/' + id)
      .then(res => {
        console.log(res)
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div>
        <Link to="/createCust" className="btn btn-success" style={{ marginTop: "150px", marginLeft: "50px" }}>Create</Link>
        <Link to="/searchCust" className="btn btn-success" style={{ marginTop: "150px", marginLeft: "50px" }}>Search</Link>
      </div>

      <div style={{ display: "flex", flexDirection: "column", marginTop: "20px", marginLeft: "50px", height: "100vh", width: "1000px" }}>
        <table className="table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Customer Number</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              customers.map((customer) => {
                return (
                  <tr>
                    <td>{customer.custname}</td>
                    <td>{customer.custNum}</td>
                    <td>{customer.city}</td>
                    <td>{customer.state}</td>
                    <td>{customer.pincode}</td>
                    <td>
                      <Link to={`/updateCust/${customer._id}`} className="btn btn-success" style={{marginRight:"20px"}}>Update</Link>
                      <button className="btn btn-danger" onClick={() => handleDelete(customer._id)}>Delete</button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customer;

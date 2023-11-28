import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchCustomer() {
  const [customers, setCustomers] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [number, setNumber] = useState("");

  useEffect(() => {
    fetchData();
  }, [number]);

  const fetchData = () => {
    axios.get("http://localhost:3001")
      .then((response) => setCustomers(response.data))
      .catch((error) => console.log("Error fetching data:", error));
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/searchCust/${number}`);
      setSearchResult(response.data);
      if(response.data === null){
        alert('Customer not found!')
      }
    } catch (error) {
      console.log("Error searching for item:", error);
      setSearchResult(null);
    } finally {
      fetchData();
    }
  };
  

  return (
    <div style={{background:'purple'}} className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Search</h2>

        <input
          type="text"
          placeholder="Enter Customer Number "
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <br/>
        <br/>
        <h2>Result</h2>
        {searchResult ? (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Customer Number</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Pincode</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{searchResult.custname}</td>
                  <td>{searchResult.custNum}</td>
                  <td>{searchResult.city}</td>
                  <td>{searchResult.state}</td>
                  <td>{searchResult.pincode}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          console.log("Customer Not found")
        )}
        <Link to='/' className="btn btn-success">Home</Link>
      </div>
    </div>
  );
}

export default SearchCustomer;
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "react-bootstrap";

const Register = () => {
  const [locations, setLocations] = useState([]);
  const [full_name, setFullName] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [booking_date, setBookingDate] = useState("");
  const [email_id, setEmailId] = useState("");
  const [time_slot, setTimeSlot] = useState("");
  const [message, setMessage] = useState("");
  const [country_id, setCountryId] = useState("");
  const [state_id, setStateId] = useState("");
  const [city_id, setCityId] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [property_owner, setPropertyOwner] = useState("");
  const [location_id, setLocationId] = useState("");
  const [sub_location_name, setSubLocationName] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [sub_location_id, setSubLocationId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("full_name", full_name);
    data.append("mobile_number", mobile_number);
    data.append("email_id", email_id);
    data.append("booking_date", booking_date);
    data.append("time_slot", time_slot);
    data.append("message", message);
    data.append("country_id", country_id);
    data.append("state_id", state_id);
    data.append("city_id", city_id);
    data.append("location_id", location_id);
    data.append("sub_location_id", sub_location_id);
    data.append("category_id", category_id);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://parkhyamapps.co.in/scott_shoot/api/a1/bookingRequest",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        toast.success("SuccessFull");
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Failed " + error.message);
      });
  };

  const handleSubLocationChange = (e) => {
    const selectedSubLocationName = e.target.value;
    setSubLocationName(selectedSubLocationName);
  
    // Filter the locations data based on the selected sub_location_name
    const filteredData = locations.filter(
      (location) => location.sub_location_name === selectedSubLocationName
    );
  
    // Update other states with filtered data
    if (filteredData.length > 0) {
      const selectedLocation = filteredData[0];
      setCountryId(selectedLocation.country_id);
      setStateId(selectedLocation.state_id);
      setCityId(selectedLocation.city_id);
      setCategory_id(selectedLocation.category_id);
      setPropertyOwner(selectedLocation.property_owner);
      setLocationId(selectedLocation.location_id); // Update location_id state
      setSubLocationId(selectedLocation.sub_location_id); // Update sub_location_id state
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://parkhyamapps.co.in/scott_shoot/api/a1/getAllFilter"
        );

        const locationsData = response.data.data.sub_location_data.map(
          (item) => ({
            sub_location_id: item.sub_location_id,
            city_name: item.city_name,
            location_id: item.location_id,
            state_name: item.state_name,
            country_name: item.country_name,
            property_owner: item.property_owner,
            city_id: item.city_id,
            state_id: item.state_id,
            country_id: item.country_id,
            property_owner_id: item.property_owner_id,
            sub_location_name: item.sub_location_name,
            category_id: item.category_id,
            category_name: item.category_name,
          })
        );
        setLocations(locationsData);
        setFilteredLocations(locationsData);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      <h1 className="top-heading-section mt-5">
        <span>Tell us</span> what you need!
      </h1>
      <p className="top-para-section">We will customize & call you back.</p>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center my-5">
            <div className="col-sm-6">
              <div className="formfield">
                <input
                  value={full_name}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  name=""
                  required
                  placeholder="Enter full_name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="formfield">
                <input
                  placeholder="Enter Mobile Number"
                  value={mobile_number}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  type="number"
                  name=""
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="formfield">
                <input
                  value={email_id}
                  placeholder="Enter Email"
                  onChange={(e) => setEmailId(e.target.value)}
                  type="email"
                  name=""
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="formfield">
                <input
                  placeholder="Enter Booking Date"
                  value={booking_date}
                  onChange={(e) => setBookingDate(e.target.value)}
                  type="date"
                  name=""
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="formfield">
                <input
                  value={time_slot}
                  placeholder="Enter Time Slot"
                  onChange={(e) => setTimeSlot(e.target.value)}
                  type="time"
                  name=""
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="formfield">
                <select
                  className="form-select"
                  value={sub_location_name}
                  onChange={handleSubLocationChange}
                >
                  <option value="">Select Sub Location Name</option>
                  {filteredLocations.map((location) => (
                    <option
                      key={location.sub_location_id}
                      value={location.sub_location_name}
                    >
                      {location.sub_location_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="formfield">
                <select
                  disabled
                  className="form-select"
                  value={sub_location_id}
                  onChange={(e) => setSubLocationId(e.target.value)}
                >
                  <option value="">Select Sub Location ID</option>

                  {filteredLocations.map((location) => (
                    <option
                      key={location.sub_location_id}
                      value={location.sub_location_id}
                    >
                      {location.sub_location_id}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="formfield">
                <select
                  disabled
                  className="form-select"
                  value={country_id}
                  onChange={(e) => setCountryId(e.target.value)}
                >
                  <option value="">Select Country</option>
                  {filteredLocations.map((location) => (
                    <option
                      key={location.country_id}
                      value={location.country_id}
                    >
                      {location.country_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="formfield">
                <select
                  disabled
                  className="form-select"
                  value={state_id}
                  onChange={(e) => setStateId(e.target.value)}
                >
                  <option value="">Select State</option>
                  {filteredLocations.map((location) => (
                    <option key={location.state_id} value={location.state_id}>
                      {location.state_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="formfield">
                <select
                  disabled
                  className="form-select"
                  value={city_id}
                  onChange={(e) => setCityId(e.target.value)}
                >
                  <option value="">Select City</option>
                  {filteredLocations.map((location) => (
                    <option key={location.city_id} value={location.city_id}>
                      {location.city_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-sm-6 d-none">
              <div className="formfield">
                <select
                  disabled
                  className="form-select"
                  value={category_id}
                  onChange={(e) => setCategory_id(e.target.value)}
                >
                  <option value="">Select category</option>
                  {filteredLocations.map((location) => (
                    <option
                      key={location.category_id}
                      value={location.category_id}
                    >
                      {location.category_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="formfield">
                <select
                  disabled
                  className="form-select"
                  value={property_owner}
                  onChange={(e) => setPropertyOwner(e.target.value)}
                >
                  {filteredLocations.map((location) => (
                    <option
                      key={location.property_owner_id}
                      value={location.property_owner}
                    >
                      {location.property_owner}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="formfield">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Enter Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="textarea"
                  required
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="text-center mb-5">
              <Button type="submit" className="btn btn-comman px-5">
                Send request
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

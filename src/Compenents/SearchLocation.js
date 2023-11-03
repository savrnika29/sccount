import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, useHistory, useNavigate } from "react-router-dom";

const SearchLocation = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city) {
      navigate(`/findproperties?city=${city}`);
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://parkhyamapps.co.in/scott_shoot/api/a1/getAllFilter?city=${city}`
        );
        setData(response.data?.data?.sub_location_data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchData();
    } else {
      setData([]);
    }
  }, [city]);

  return (
    <>
      <div className="serachmain">
        <div className="search-box mt-3">
          <h1 className="top-heading-section my-5">
            Search your next <span>Locations</span>
          </h1>

          <div className="inputbox-main position-relative row justify-content-center">
            <div className="col-sm-6 position-relative">
              <i className="far fa-map-marker-alt"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Enter City"
                value={city}
                onChange={handleInputChange}
              />
              <i className="far fa-search"></i>
            </div>
            <div className="col-auto">
              <button className="px-4 " type="button" onClick={handleSearch}>
                Filters <i class="fal fa-filter"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {loading && <p>Loading...</p>}

      {data.length > 0 ? (
        <Container className="mt-5">
          <Row>
            {data.map((location) => (
              <Col sm={3} key={location.sub_location_id}>
                <Link to={`/productpage/${location.sub_location_id}`}>
                  <div className="items-box-serachbox">
                    <Image src={location.sub_location_images[0]} alt="" />
                    <p>{location.sub_location_name}</p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <p className="text-center mt-3">
          {city ? "No data found for the given city." : "Search the city name."}
        </p>
      )}
    </>
  );
};

export default SearchLocation;

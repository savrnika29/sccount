import axios from "axios";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, { useEffect, useState } from "react";
import { Accordion, Image } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Mainlocation = () => {
  const [data, setData] = useState([]);
  const [locationTypes, setLocationTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [propertyOwners, setPropertyOwners] = useState([]);
  const [selectedLocationTypes, setSelectedLocationTypes] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedPropertyOwners, setSelectedPropertyOwners] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sizeRange, setSizeRange] = useState([0, 200]);
  const [taxRange, setTaxRange] = useState([0, 50000]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 3;

  const navigate = useNavigate();
  const location = useLocation();

  // Function to fetch data from the API
  const fetchData = async () => {
    const response = await axios.get(
      "https://parkhyamapps.co.in/scott_shoot/api/a1/getAllFilter/"
    );
    setData(response.data.data.sub_location_data);
  };

  const fetchData1 = async () => {
    try {
      // Fetch location types
      const locationTypeResponse = await axios.get(
        "https://parkhyamapps.co.in/scott_shoot/api/a1/getLocationType"
      );
      setLocationTypes(locationTypeResponse.data.data);

      // Fetch cities
      const cityResponse = await axios.get(
        "https://parkhyamapps.co.in/scott_shoot/api/a1/getCity"
      );
      setCities(cityResponse.data.data);

      // Fetch countries
      const countryResponse = await axios.get(
        "https://parkhyamapps.co.in/scott_shoot/api/a1/getCountry"
      );
      setCountries(countryResponse.data.data);

      // Fetch states
      const stateResponse = await axios.get(
        "https://parkhyamapps.co.in/scott_shoot/api/a1/getState"
      );
      setStates(stateResponse.data.data);

      // Fetch property owners
      const propertyOwnerResponse = await axios.get(
        "https://parkhyamapps.co.in/scott_shoot/api/a1/getPropertyOwner"
      );
      setPropertyOwners(propertyOwnerResponse.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchData1();
    updateSelectedFilters();
  }, []);

  // Function to update selected filters based on URL parameters
  const updateSelectedFilters = () => {
    const searchParams = new URLSearchParams(location.search);
    const locationTypeParams = searchParams.getAll("category_name");
    setSelectedLocationTypes(locationTypeParams);

    const cityParams = searchParams.getAll("city");
    setSelectedCities(cityParams);

    const countryParams = searchParams.getAll("country");
    setSelectedCountries(countryParams);

    const stateParams = searchParams.getAll("state");
    setSelectedStates(stateParams);

    const propertyOwnerParams = searchParams.getAll("property_owner");
    setSelectedPropertyOwners(propertyOwnerParams);
  };

  // Helper function to update the selected location types
  const handleLocationTypeSelection = (locationType) => {
    setSelectedLocationTypes([locationType]);

    // Update URL with the selected filters without refreshing the page
    const queryString = generateQueryString(
      selectedCities,
      [locationType],
      selectedCountries,
      selectedStates,
      selectedPropertyOwners
    );
    navigate(`/mainlocation${queryString}`);
  };

  // Helper function to update the selected cities
  const handleCitySelection = (city) => {
    setSelectedCities([city]);

    // Update URL with the selected filters without refreshing the page
    const queryString = generateQueryString(
      [city],
      selectedLocationTypes,
      selectedCountries,
      selectedStates,
      selectedPropertyOwners
    );
    navigate(`/mainlocation${queryString}`);
  };

  // Helper function to update the selected countries
  const handleCountrySelection = (country) => {
    setSelectedCountries([country]);

    // Update URL with the selected filters without refreshing the page
    const queryString = generateQueryString(
      selectedCities,
      selectedLocationTypes,
      [country],
      selectedStates,
      selectedPropertyOwners
    );
    navigate(`/mainlocation${queryString}`);
  };

  // Helper function to update the selected states
  const handleStateSelection = (state) => {
    setSelectedStates([state]);

    // Update URL with the selected filters without refreshing the page
    const queryString = generateQueryString(
      selectedCities,
      selectedLocationTypes,
      selectedCountries,
      [state],
      selectedPropertyOwners
    );
    navigate(`/mainlocation${queryString}`);
  };

  // Helper function to update the selected property owners
  const handlePropertyOwnerSelection = (propertyOwner) => {
    setSelectedPropertyOwners([propertyOwner]);

    // Update URL with the selected filters without refreshing the page
    const queryString = generateQueryString(
      selectedCities,
      selectedLocationTypes,
      selectedCountries,
      selectedStates,
      [propertyOwner]
    );
    navigate(`/mainlocation${queryString}`);
  };

  // Function to generate the query string for selected filters
  const generateQueryString = (
    cities,
    locationTypes,
    countries,
    states,
    propertyOwners
  ) => {
    const locationTypeQuery = locationTypes
      .map(
        (locationType) => `category_name=${encodeURIComponent(locationType)}`
      )
      .join("&");

    const cityQuery = cities
      .map((city) => `city=${encodeURIComponent(city)}`)
      .join("&");

    const countryQuery = countries
      .map((country) => `country=${encodeURIComponent(country)}`)
      .join("&");

    const stateQuery = states
      .map((state) => `state=${encodeURIComponent(state)}`)
      .join("&");

    const propertyOwnerQuery = propertyOwners
      .map(
        (propertyOwner) => `property_owner=${encodeURIComponent(propertyOwner)}`
      )
      .join("&");

    return `?${locationTypeQuery}${cityQuery}${countryQuery}${stateQuery}${propertyOwnerQuery}`;
  };

  // Function to apply filters and get the filtered data
  const getFilteredData = () => {
    return data.filter((item) => {
      const isLocationTypeMatch =
        selectedLocationTypes.length === 0 ||
        selectedLocationTypes.includes(item.category_name);

      const isCityMatch =
        selectedCities.length === 0 || selectedCities.includes(item.city_name);

      const isCountryMatch =
        selectedCountries.length === 0 ||
        selectedCountries.includes(item.country_name);

      const isStateMatch =
        selectedStates.length === 0 || selectedStates.includes(item.state_name);

      const isPropertyOwnerMatch =
        selectedPropertyOwners.length === 0 ||
        selectedPropertyOwners.includes(item.property_owner);

      const isPriceMatch =
        item.price >= priceRange[0] && item.price <= priceRange[1]; // Check if item's price falls within the selected range

      const isSizeMatch =
        item.size_area >= sizeRange[0] && item.size_area <= sizeRange[1]; // Check if item's size area falls within the selected range

      const isTaxMatch =
        item.tax_to_accommodate >= taxRange[0] &&
        item.tax_to_accommodate <= taxRange[1]; // Check if item's tax falls within the selected range

      return (
        isLocationTypeMatch &&
        isCityMatch &&
        isCountryMatch &&
        isStateMatch &&
        isPropertyOwnerMatch &&
        isPriceMatch &&
        isSizeMatch &&
        isTaxMatch
      );
    });
  };

  // Function to clear all filters
  const clearFilters = () => {
    setSelectedLocationTypes([]);
    setSelectedCities([]);
    setSelectedCountries([]);
    setSelectedStates([]);
    setSelectedPropertyOwners([]);
    setPriceRange([0, 50000]);
    setSizeRange([0, 200]);
    setTaxRange([0, 50000]);
    navigate("/mainlocation"); // Reset the URL to default
  };

  const getPaginatedFilteredData = () => {
    const filteredData = getFilteredData();
    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredData.slice(indexOfFirstItem, indexOfLastItem);
  };

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-auto">
          <div className="side-box-1">
            <div className="d-flex justify-content-between mb-3">
              <h6>Filter</h6>
              <button className="clearfilter" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
            <h5>Location Types:</h5>
            <ul>
              {locationTypes.map((locationType) => (
                <li key={locationType.id}>
                  <button
                    onClick={() =>
                      handleLocationTypeSelection(locationType.category_name)
                    }
                    className={
                      selectedLocationTypes.includes(locationType.category_name)
                        ? "active"
                        : ""
                    }
                  >
                    {locationType.category_name}
                  </button>
                </li>
              ))}
            </ul>

            <Accordion>
              <Accordion.Item eventKey="cityName">
                <Accordion.Header>City Name</Accordion.Header>
                <Accordion.Body className="px-0 ">
                  <ul>
                    {cities.map((city) => (
                      <li key={city.id}>
                        <button
                          onClick={() => handleCitySelection(city.city_name)}
                          className={
                            selectedCities.includes(city.city_name)
                              ? "active"
                              : ""
                          }
                        >
                          {city.city_name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="countryName">
                <Accordion.Header>Country Name</Accordion.Header>
                <Accordion.Body className="px-0 ">
                  <ul>
                    {countries.map((country) => (
                      <li key={country.id}>
                        <button
                          onClick={() =>
                            handleCountrySelection(country.country_name)
                          }
                          className={
                            selectedCountries.includes(country.country_name)
                              ? "active"
                              : ""
                          }
                        >
                          {country.country_name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="stateName">
                <Accordion.Header>State Name</Accordion.Header>
                <Accordion.Body className="px-0 ">
                  <ul>
                    {states.map((state) => (
                      <li key={state.id}>
                        <button
                          onClick={() => handleStateSelection(state.state_name)}
                          className={
                            selectedStates.includes(state.state_name)
                              ? "active"
                              : ""
                          }
                        >
                          {state.state_name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <h5 className="mt-3">Property Owners:</h5>
            <ul>
              {propertyOwners.map((propertyOwner) => (
                <li key={propertyOwner.id}>
                  <button
                    onClick={() =>
                      handlePropertyOwnerSelection(propertyOwner.property_owner)
                    }
                    className={
                      selectedPropertyOwners.includes(
                        propertyOwner.property_owner
                      )
                        ? "active"
                        : ""
                    }
                  >
                    {propertyOwner.property_owner}
                  </button>
                </li>
              ))}
            </ul>

            <div>
              <h5>Budget</h5>
              <Slider
                range
                min={0}
                max={50000}
                value={priceRange}
                onChange={setPriceRange}
              />

              <div className="d-flex justify-content-between">
                <p> {priceRange[0]}</p>
                <p> {priceRange[1]}</p>
              </div>
            </div>

            <div>
              <h5>Size Area</h5>
              <Slider
                range
                min={0}
                max={200}
                value={sizeRange}
                onChange={setSizeRange}
              />

              <div className="d-flex justify-content-between">
                <p> {sizeRange[0]}</p>
                <p> {sizeRange[1]}</p>
              </div>
            </div>

            <div>
              <h5>Tax to accommodate</h5>
              <Slider
                range
                min={0}
                max={50000}
                value={taxRange}
                onChange={setTaxRange}
              />

              <div className="d-flex justify-content-between">
                <p> {taxRange[0]}</p>
                <p> {taxRange[1]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="">
            {getPaginatedFilteredData().map((item, index) => (
              <Link key={index} to={`/productpage/${item.sub_location_id}`}>
                <div className="listb-box mb-5">
                  <div className="row">
                    <div className="col-auto">
                      <Image src={item.sub_location_images[0]} alt="" />
                    </div>
                    <div className="col">
                      <h2>{item.sub_location_name}</h2>
                      <p>{item.sub_description}</p>
                      <p>{item.price}</p>
                      <p>{item.size_area}</p>
                      <p>{item.tax_to_accommodate}</p>
                    </div>
                  </div>
                  <div className="text-end mt-2">
                    <Link
                      className="btn btn-booknow px-5"
                      key={index}
                      to={{
                        pathname: "/bookings",
                        search: `?property=${item.sub_location_id}&country=${item.country_name}&state=${item.state_name}&city=${item.city_name}&category_id=${item.category_id}&location_id=${item.location_id}&property_owner=${item.property_owner}&sub_location_id=${item.sub_location_id}&propertyName=${item.sub_location_name}&country_id=${item.country_id}&state_id=${item.state_id}&city_id=${item.city_id}&property_owner_id=${item.property_owner_id}`,
                      }}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={getFilteredData().length}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainlocation;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';

const HomeSlider = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://parkhyamapps.co.in/scott_shoot/api/a1/getBanner"
        );
        setData(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  return (
    <div>        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <ol className="carousel-indicators justify-content-end mb-5">
      <li
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        className="active"
      ></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
    </ol>
    <div className="carousel-inner">
      {data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <Image
              src={item.banner_image}
              className="img-fluid"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))
      ) : (
        <div className="carousel-item active">
          <Image
            src="placeholder.jpg" // Replace with your placeholder image source
            className="img-fluid"
            alt="No Image Available"
          />
        </div>
      )}
    </div>
    <a
      className="carousel-control-prev"
      href="#myCarousel"
      role="button"
      data-bs-slide="prev"
    >
      <span
        className="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#myCarousel"
      role="button"
      data-bs-slide="next"
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Next</span>
    </a>
    <div className="bookbtn-box">
      <button className="btn btn-comman">Book Now</button>
    </div>
  </div>
</div>
  )
}

export default HomeSlider
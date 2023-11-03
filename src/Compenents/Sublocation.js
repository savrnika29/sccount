import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sublocation = ({ locationid }) => {
  // Slick settings for the slider
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of items to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <i className="fas fa-chevron-left"></i>, // Left arrow icon
    nextArrow: <i className="fas fa-chevron-right"></i>, // Right arrow icon
  };

  var id = useParams();
  const [sublocations, setSublocations] = useState([]);
  const fetchSublocations = async () => {
    const response = await axios.get(
      `https://parkhyamapps.co.in/scott_shoot/api/a1/getSubLocationList/?location_id=${
        locationid || id.locationid
      }`
    );
    // if (response.data?.data) {
    //  console.log("is array data", response.data.data);
    // } else {
    //   console.log("is object data",[...response.data.data]);
    // }

    setSublocations(response.data.data);
    console.log(
      "responsepppppppppppppppppppppppppppppppppppp",
      response.data.data
    );
  };

  useEffect(() => {
    fetchSublocations();
  }, [locationid]);
  return (
    <Container>
      <h1 className="top-heading-section my-5">Other Sub Locations</h1>

      <div className="multi-item-slider">
        <Slider {...sliderSettings}>
          {sublocations &&
            sublocations?.map((location, index) => (
              <Link key={index} to={`/productpage/${location.sub_location_id}`}>
                <div className="sublocation-box">
                  <Image src={location.sub_location_images[0]} alt="" />
                  <p>{location.sub_location_name}</p>
                </div>
              </Link>
            ))}
        </Slider>
      </div>

      {/* <OwlCarousel
        className="owl-theme-1"
        margin={20}
        loop
        items={4}
        nav={true}
        navText={[
          "<i class='fas fa-chevron-left'></i>",
          "<i class='fas fa-chevron-right'></i>",
        ]}
      >
        {sublocations &&
          sublocations?.map((location, index) => (
            <Link key={index} to={`/productpage/${location.sub_location_id}`}>
              <div className="sublocation-box">
                <Image src={location.sub_location_images[0]} alt="" />
                <p>{location.sub_location_name}</p>
              </div>
            </Link>
          ))}
      </OwlCarousel> */}
    </Container>
  );
};

export default Sublocation;

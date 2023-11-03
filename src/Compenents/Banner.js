import { useEffect, useState } from "react";
import {
  location9,
  location10,
  location11,
  location12,
  location13,
  location14,
  location16,
  location17,
  about,
} from "./imgUrl";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Location, { Locationslider } from "./Location";
import LocationType from "./LocationType";
import Testimonials from "./Testimonials";
import SearchLocation from "./SearchLocation";
import { Image } from "react-bootstrap";
import HomeSlider from "./HomeSlider";
import Bestdeals from "./Bestdeals";
import TVAds from "./TVAds";

const Banner = () => {
  return (
    <div>
      <div className="position-relative">
        <HomeSlider />

        <SearchLocation />
      </div>

      <div className="container">
        <Bestdeals />

        <div className="">
          <div className="row p-0">
            <div className="col-sm-6 ps-0">
              <LocationType />
            </div>
            <div className="col-sm-6">
              <Testimonials />
            </div>
          </div>
        </div>

        <div className="row align-items-end ">
          <div className="col-sm-6">
            <h1 className="top-heading-section mt-5 mb-2 text-start">
              Exclusive <span>properties </span>Price on Request
            </h1>
          </div>
          <div className="col-sm-6 text-end mb-4">
            <button className="btn btn-comman px-5 py-1">call now</button>
          </div>
        </div>

        <Location />

        <div className="container py-5">
          <h1 className="top-heading-section my-5">
            <span> About</span> us
          </h1>
          <div className="row align-items-center">
            <div className="col-sm-6">
              <img src={about} className="w-full" alt="" />
            </div>
            <div className="col-sm-6">
              <div className="about-section">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  labore. Temporibus reiciendis fugiat sit libero quasi?
                  Architecto, rem! Amet facilis ducimus dolores, omnis corrupti
                  laudantium ex quidem quae aut assumenda. Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Quis culpa id facere
                  libero ad, maxime modi earum praesentium delectus officiis
                  inventore suscipit rem non explicabo quidem neque dolores
                  pariatur? Veritatis?
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione perspiciatis sint, porro ab incidunt amet quasi non
                  voluptatibus maiores commodi consequuntur earum exercitationem
                  aperiam natus possimus nulla dolorem ipsa omnis!
                </p>
                <Link className="btn px-4" to="/about">
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TVAds />

  
      <div className="container">
        <h1 className="top-heading-section my-5">
          Unable to find what <span> you want? </span>
        </h1>
        <div className="text-center mt-5">
          <button className="btn btn-comman px-5">get in touch</button>
        </div>
      </div>

      <div className="container mb-5">
        <h1 className="top-heading-section my-5 ">
          Have a property to <span> list?</span>
        </h1>
        <div className="row align-items-center justify-content-around">
          <div className="col-sm-6">
            <img src={about} className="w-full" alt="" />
          </div>
          <div className="col-auto">
            <div className="text-center mt-5">
              <Link to="/login" className="btn btn-comman px-5">
                login/signup
              </Link>
            </div>
            <div className="text-center mt-5">
              <button className="btn btn-comman px-5">Port the list</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const Faq = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://parkhyamapps.co.in/scott_shoot/api/a1/getFaq"
      );
      setData([response.data.data]);

      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Container className="py-5">
      <h1 className="top-heading-section my-5">
        <span>Frequently asked questions</span> us
      </h1>
      {data.map((item) => (
        <>
          <div className="about-section">
            <h3>Q.{item.faq_question}</h3>
            <p key={item.id}> <span className="text-danger">Ans :-</span> {item.faq_answer}</p>
          </div>
        </>
      ))}
    </Container>
  );
};

export default Faq;

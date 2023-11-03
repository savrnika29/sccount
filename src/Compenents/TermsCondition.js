import React, { useEffect, useState } from "react";
import { Container} from "react-bootstrap";
import axios from "axios";

const TermsCondition = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://parkhyamapps.co.in/scott_shoot/api/a1/getTerms"
      );
      setData([response.data.data]);

      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Container className="py-5">
      {data.map((item) => (
        <>
          <h1 className="top-heading-section my-5">
            <span>{item.policy_name}</span> us
          </h1>
          <div className="about-section">
            <p key={item.id}>{item.policy_content}</p>
          </div>
        </>
      ))}
    </Container>
  );
};

export default TermsCondition;

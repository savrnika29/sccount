import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const VerifyMailPage = () => {
  const [email_id, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate email format (you can use a library like 'validator' for more comprehensive validation)
    if (!email_id || !email_id.includes("@")) {
      console.log("Invalid email");
      return;
    }

    // Assuming you have an API endpoint for email verification
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL
    axios
      .post("http://parkhyamapps.co.in/scott_shoot/api/a1/foundUser", {
        email_id,
      })
      .then((response) => {
        // Assuming the response contains a 'customerId'
        console.log(response.data.data);
        const customer_id = response.data.data.customer_id;
        console.log(customer_id);
        // Navigate to the ResetPasswordPage with the customerId parameter
        navigate(`/reset-password/${customer_id}`);
        toast.success("Email Verify successful");

      })
      .catch((error) => {
        toast.error("Verify failed: Invalid email");
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1 className="top-heading-section my-5">
        <span>Verify Email </span>
      </h1>

      <div className="row justify-content-center pb-5">
        <div className="col-sm-6">
          <form onSubmit={handleFormSubmit} className="text-center">
            <div className="formfield">
              <input
                type="email"
                placeholder=" Enter email address"
                value={email_id}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" class="px-5 mt-4 btn btn-comman">Verify Email</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyMailPage;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const { customer_id } = useParams();
  const [new_password, setNewPassword] = useState("");
  const [customer_idInput, setCustomerIdInput] = useState(customer_id);
  const navigate = useNavigate();

  useEffect(() => {
    setCustomerIdInput(customer_id);
  }, [customer_id]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Assuming you have an API endpoint for resetting the password
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL
    axios
      .post("http://parkhyamapps.co.in/scott_shoot/api/a1/forgotPassword", {
        customer_id: customer_idInput,
        new_password,
      })
      .then((response) => {
        if (response.status === 200) {
          // Password reset successfully, navigate to the login page
          navigate("/login");
          toast.success("reset password successful");
        } else {
          console.log("Failed to reset password");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1 className="top-heading-section my-5">
        Reset <span>Password </span>
      </h1>

      <div className="row justify-content-center pb-5">
        <div className="col-sm-6">
          <form onSubmit={handleFormSubmit} className="text-center">
            <div className="formfield">
              <input
                type="text"
                placeholder="Customer ID:"
                className="form-control"
                value={customer_idInput}
                onChange={(e) => setCustomerIdInput(e.target.value)}
              />
            </div>
            <div className="formfield">
              <input
                type="password"
                placeholder="New Password:"
                className="form-control"
                value={new_password}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-comman">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

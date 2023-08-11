import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../Components/Header/Message";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/user/userSlice";

const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ msg, setMsg ] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      navigate("/");
    } catch (error) {
      setMsg(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        
        { msg ? <Message variant="danger"> { msg } </Message> : "" }

        <h1 className="text-3xl font-bold mb-8">Login to your account</h1>

        <form className="flex gap-2 flex-col" onSubmit = { SubmitHandler }>
          <input
            className = "input-field"
            type = "text"
            placeholder = "Email"
            onChange = {(e) => setEmail(e.target.value)}
          />

          <input
            className = "input-field"
            type = "password"
            placeholder = "Password"
            onChange = {(e) => setPassword(e.target.value)}
          />

          <Link className="mb-2 text-right text-violet-600">
            Forgot Password
          </Link>

          <button className = "btn-form">
            Sign in
          </button>

          <p className = "mt-2">
            Don't have account?
            <Link to = "/register">Register</Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;

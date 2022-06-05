// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/Login.css";
// import { useNavigate } from "react-router-dom";
// import { FaEnvelope, FaUser } from "react-icons/fa";
// import AppInputs from "../components/AppInputs";
// import { inputData } from "../Config/SizeColors";
// const Login = () => {
//   const [name, setname] = useState();
//   const [password, setpassword] = useState();

//   const navigate = useNavigate();
//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:5000/login", {
//         name,
//         password,
//       })
//       .then((res) => {
//         const { status, data, msg } = res.data;
//         if (status === "error") throw alert(msg);
//         else if (status === "success") {
//           localStorage.setItem("token", data.token);
//           navigate("/dashboard");

//           // const tkn = localStorage.getItem("token");
//           // console.log(tkn, "token data");
//           // if (tkn) {
//           // } else {
//           //   navigate("/login");
//           // }

//           // window.location.href = "/dashboard";
//         }
//       })
//       .catch((e) => {});
//   };
//   return (
//     <div className="login">
//       <form>
//         <AppInputs
//           type="text"
//           placeholder="name"
//           icon={<FaUser />}
//           value={name}
//           onChange={(e) => setname(e.target.value)}
//           size={inputData.larg}
//           bgColor={inputData.white}
//         />
//         <AppInputs
//           type="text"
//           icon={<FaEnvelope />}
//           placeholder="password"
//           value={password}
//           onChange={(e) => setpassword(e.target.value)}
//           size={inputData.larg}
//           bgColor={inputData.white}
//         />
//         <button
//           onClick={handleLogin}
//           className="bg-blue-800 hover:bg-blue-700 font-bold tracking-wide rounded-full h-10 text-white w-9/12"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

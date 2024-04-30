import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoMdEye } from "react-icons/io";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { IoCopy } from "react-icons/io5";
import Forget from "../Modal/Forget";
import Swal from "sweetalert2";
import { useMutation } from "react-query";
import { authenticate, storeSignIn } from "../helpers/auth";
import { useCookies } from "react-cookie";
const Login = () => {
  const navigate = useNavigate();
  const DemoData = { mail: "Store@gmail.com", password: "123456" };
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [show, setShow] = useState("false");
  const [cookies, setCookie] = useCookies(["store"]);
  const [isLoading, setIsLoading] = useState(false);



  // Use the useMutation hook
  const loginMutation = useMutation(
    storeSignIn,
    {
      onMutate: () => {
        setIsLoading(true); // Set loading to true when mutation starts
      },

      onSuccess: (data) => {
        setIsLoading(false);
        if (data.success === true) {
          return authenticate(data, () => {
            navigate("/");
          }, setCookie);
        }
        if (data.success === false) {
          console.log(data)
          return Swal.fire({
            icon: "error",
            title: data?.error || data?.errors || "something went wrong",
            timer: "2000",
            confirmButtonText: "Ok",
            confirmButtonColor: "#33996a",

            showClass: {
              popup: "swal2-show",
              backdrop: "swal2-backdrop-show",
              icon: "swal2-icon-show",
            },
            hideClass: {
              popup: "swal2-hide",
              backdrop: "swal2-backdrop-hide",
              icon: "swal2-icon-hide",
            },
          });
        } else {
          return Swal.fire({
            icon: "error",
            title: "something went wrong",
            timer: "2000",
            confirmButtonText: "Ok",
            confirmButtonColor: "#33996a",

            showClass: {
              popup: "swal2-show",
              backdrop: "swal2-backdrop-show",
              icon: "swal2-icon-show",
            },
            hideClass: {
              popup: "swal2-hide",
              backdrop: "swal2-backdrop-hide",
              icon: "swal2-icon-hide",
            },
          });
        }
      },
      onError: (error) => {
        setIsLoading(false); // Set loading to false when there's an error
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          timer: "2000",
          confirmButtonText: "Ok",
          confirmButtonColor: "#33996a",
          // ... other Swal options
        });
      },

    }
  );
  //handle login
  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    loginMutation.mutate({ email: formData.get('email'), password: formData.get('password') });
  };

  // const forwardtohome = () => {
  //   if (mail !== DemoData.mail || password !== DemoData.password) {
  //     return Swal.fire({
  //       icon: "error",
  //       title: "Mail and Password is Incorrect",
  //       timer: "2000",
  //       confirmButtonText: "Ok",
  //       confirmButtonColor: "#33996a",

  //       showClass: {
  //         popup: "swal2-show",
  //         backdrop: "swal2-backdrop-show",
  //         icon: "swal2-icon-show",
  //       },
  //       hideClass: {
  //         popup: "swal2-hide",
  //         backdrop: "swal2-backdrop-hide",
  //         icon: "swal2-icon-hide",
  //       },
  //     });
  //   } else {
  //     return navigate("/");
  //   }
  // };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    animation: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  return (
    <div>
      <Forget />
      <div className="w-full h-screen flex">
        <div className="w-[55%] md:flex md:flex-col items-end justify-center bg-cover pr-36 hidden   h-[100%] md:bg-[url('https://6ammart-admin.6amtech.com/public/assets/admin/css/images/auth-bg.png')] object-cover overflow-hidden">
          <div className="w-fit flex flex-col gap-y-4">
            <img src={logo} className="h-20" alt="logo" />
            <h1 className="text-7xl font-light text-gray-800 text-start w-full ">
              Your
            </h1>
            <h1 className="text-7xl font-light text-gray-800 w-full text-start">
              All Service
            </h1>
            <h1 className="text-5xl font-bold text-[#33996a]">
              In one field....
            </h1>
          </div>
        </div>
        <div className="  h-full flex flex-col items-center justify-center w-full p-4 md:w-[45%]">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col items-center justify-center w-full ">
              <h1 className="font-bold text-4xl text-gray-700 my-2">
                Vendor Signin
              </h1>
              <p className="text-gray-500 mb-5">
                Welcome back login to your panel.
              </p>

              <label className="form-control w-full max-w-lg my-3">
                <div className="label">
                  <span className="label-text">Your Email</span>
                </div>
                <input
                  type="text"
                  placeholder="Email@address.com"
                  className="input input-bordered w-full max-w-[450px]"
                  value={mail}
                  id="mail"
                  name="email"
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </label>

              <label className="form-control w-full max-w-lg  ">
                <div className="label">
                  <span className="label-text my-1">Password</span>
                </div>
                <div className="flex items-center justify-start relative ">
                  <input
                    placeholder="6+ plus Characters"
                    className="input input-bordered w-full max-w-[450px] "
                    type={show ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="password"
                    name="password"
                    required
                  />
                  <button className="p-3 bg-transparent text-[#039D55] border-none bg-white text-2xl absolute left-[78%] rounded-full">
                    {show ? (
                      <IoMdEye onClick={() => setShow(!show)} />
                    ) : (
                      <AiFillEyeInvisible onClick={() => setShow(!show)} />
                    )}
                  </button>

                  {/* <IoMdEye className="inline-block absolute  right-2" /> */}
                </div>
              </label>

              <div className="w-full flex justify-evenly items-center md:mr-16 my-4">
                <div className="form-control my-2 text-start  ">
                  <label className="label cursor-pointer flex justify-start items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox size-6 mx-2"
                    />
                    <span className="label-text">Remember me</span>
                  </label>
                </div>
                <Link
                  className="text-[#33996a] text-end w-full  md:w-[28%]"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Forget Password?
                </Link>
              </div>
              <button disabled={isLoading}

                type="submit"
                className="btn btn-success w-[300px] md:w-[440px] text-white md:mr-14 "
              >

                {isLoading ? (
                  <span className="loading loading-dots loading-md"></span>

                ) : (
                  'Login'
                )}


              </button>
            </div>
          </form>
          <div className="  w-full my-10">
            <div className="w-[70%] md:ml-16 m-auto flex justify-between  items-start">
              <div className="px-2 font-semibold">
                <h1>Email: {DemoData.mail}</h1>
                <h1>Password : {DemoData.password}</h1>
              </div>

              <button
                className="btn btn-success"
                onClick={() => {
                  return (() => {
                    setMail(DemoData.mail);
                    setPassword(DemoData.password);
                    Toast.fire({
                      icon: "success",
                      title: "successfully copied",
                      position: "bottom-left",
                      background: "#038D4C",
                      color: "#fff",
                      timer: "1000",
                    });
                    document.getElementById("mail").disabled = true;
                    document.getElementById("password").disabled = true;
                  })();
                }}
              >
                <IoCopy className="text-2xl text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

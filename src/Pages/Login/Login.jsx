import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Result } from "postcss";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const Login = () => {


    const {Login} = useContext(AuthContext)

    const handleLogin  = e =>{
        e.preventDefault();
        const form = e.target ;

       

        const email = form.email.value ;

        const password = form.password.value ;


        const userInfo = {
             email , password
        }
        console.log(userInfo);

        Login(email , password)
        .then(result =>{
            console.log(result);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "login successful",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(error =>{
            console.log(error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "login failed",
                showConfirmButton: false,
                timer: 1500
              });

        })



    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Your Password"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full focus:outline-none"
          >
            Log In
          </button>
        </form>

        <p className="mt-5 font-bold text-center text-teal-700"> or , singUp with Google </p>


          <SocialLogin>  </SocialLogin>

        <p className="mt-5 font-bold text-center"> New Here ?  </p> 
        <Link  to='/signUp'> <button className="btn  btn-link font-bold text-xl"> sign Up </button>  </Link>
      </div>
    </div>
  );
};

export default Login;

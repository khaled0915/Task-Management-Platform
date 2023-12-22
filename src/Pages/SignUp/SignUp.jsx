import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";




const SignUp = () => {


    const {createUser} = useContext(AuthContext)


    const handleSignUp = e =>{
        e.preventDefault();

        const form = e.target ;

        const name = form.name.value ; 

        const email = form.email.value ;

        const password = form.password.value ;


        const userInfo = {
            name , email , password
        }

        console.log(userInfo);

        createUser( email , password )
        .then( result => {
            console.log(result);

        })
        .catch(error =>{
            console.log(error);

        })
        form.reset();
        

    }
  const [showPassword, setShowPassword] = useState(false);

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Your Password"
              />
              <button
                type="button"
                className="absolute top-0 right-0 mr-2 mt-2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full focus:outline-none"
          >
            Sign Up
          </button>
        </form>


        <p className="mt-5"> Already have an account ?  </p>
<Link to='/login'> <button className="btn btn-link  font-bold text-xl"> Login </button> </Link> 



      </div>
    </div>
  );
};

export default SignUp;

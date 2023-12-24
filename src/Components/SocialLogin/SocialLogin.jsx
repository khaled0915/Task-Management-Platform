import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const SocialLogin = () => {


    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then( result =>{
            console.log(result.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " login with google successful ",
                showConfirmButton: false,
                timer: 1500
              });

        })
        .catch(error =>{
            console.log(error);
        })
    }


    return (
        <div>

<div className="p-8 text-center ">
            <div>
            <button onClick={handleGoogleSignIn} className="bg-red-600 btn text-xl" >
  <FaGoogle className="mr-4"></FaGoogle>
  Google
</button>
            </div>
        </div>
            
        </div>
    );
};

export default SocialLogin;
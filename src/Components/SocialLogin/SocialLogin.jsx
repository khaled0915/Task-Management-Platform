import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {


    const {googleSignIn} = useContext(AuthContext)

    const navigate =  useNavigate();


    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then( result =>{
            console.log(result.user);

            const userInfo = {
                email : result.user?.email ,
                name : result.user?.displayName 
            }

            axiosPublic.post('/users' , userInfo)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: " login with google successful ",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/dashboard/addTask')
                
            })


            
            

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
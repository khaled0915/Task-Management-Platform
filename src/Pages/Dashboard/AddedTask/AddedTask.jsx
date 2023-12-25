import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useTask from "../../../hooks/useTask";




const AddedTask = () => {


    const [ task , loading , refetch ] = useTask();

    const axiosPublic = useAxiosPublic();


    const loader = useLoaderData();

    console.log(loader);

   


    console.log(task);



    return (

        <div> 



            <h2 className="text-3xl text-center font-bold underline"> You can see your added task here </h2>




               
        </div>
      
        
        
       


       
    );
};

export default AddedTask;
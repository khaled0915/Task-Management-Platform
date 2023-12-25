import { FaHome, FaTable, FaTasks } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { GoSidebarCollapse } from "react-icons/go";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const Dashboard = () => {

    const { user } = useContext(AuthContext)
    
    return (
        <div className="flex">







<div className="  lg:drawer-open">

  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className=" mt-2 drawer-button text-yellow-700 text-4xl  font-extrabold  lg:hidden "> <GoSidebarCollapse /></label>


    
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 



    <ul className="menu p-4   min-h-full bg-base-200 text-base-content">


        




      {/* Sidebar content here */}



      <li>

<img className="rounded-full w-[120px] mr-4  " src={user?.photoURL} alt="" />
<p className=" mt-2 mb-3 text-red-500 font-bold"> user : {user?.displayName}</p>

</li>


     


      
      <li>


<NavLink to='/dashboard/addTask'>

    <div className="flex  rounded-lg items-center justify-center gap-3">
       


         <FaTasks></FaTasks> Add your Task

    </div>


</NavLink>

</li>


      <li className="mt-3">


<NavLink to='/dashboard/addedTask'>

    <div className="flex  rounded-lg items-center justify-center gap-3">
       


         <FaTable></FaTable> Added Task

    </div>


</NavLink>

</li>


      {/* divider */}

      <div className="divider divider-warning"></div>

<li>
    <NavLink to='/'>

        <div className="flex items-center  rounded-lg justify-center gap-3 mt-3">
            <FaHome></FaHome>
            Home
        </div>

    </NavLink>

</li>





    </ul>
  
  </div>
</div>
           


            <div className="flex-1">

           


                <Outlet></Outlet>
            </div>

        </div>





    );
};

export default Dashboard;
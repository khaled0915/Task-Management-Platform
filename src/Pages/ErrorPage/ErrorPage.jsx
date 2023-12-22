import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col bg-red-300 items-center justify-center h-screen">
      <img src="https://i.ibb.co/QNFYHJr/6342464.jpg" alt="Error" className=" h-auto w-2/4 mb-8" /> 
      <div className="text-center">
        <h2 className="text-2xl t font-bold">Oops! Something went wrong</h2>
        <p className="text-white text-xl font-bold ">We're sorry, but it seems there was an error. Please try again later.</p>

        <Link to='/'> <button className="btn btn-accent mt-10"> Go Back  </button> </Link>
      </div>
    </div>
            
        </div>
    );
};

export default ErrorPage;
import Swal from "sweetalert2";

const Contact = () => {


    const handleContact = e =>{
        e.preventDefault();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your response has been sent",
            showConfirmButton: false,
            timer: 1500
          });
      
    }
    return (
     


 
    <div className="container mx-auto my-10 p-6 bg-gray-200 rounded-lg shadow-md max-w-md">
      <div className="text-center mb-6">
        <img src="https://i.ibb.co/XZ6yYSF/5118759.jpg" alt="Contact Us" className="mx-auto w-20 h-20 rounded-full" />
        <h2 className="text-2xl font-bold mt-4">Contact Us</h2>
      </div>

      <form>
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
          <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button 
         
         onClick={handleContact}
           type="submit"
          className="bg-blue-500  hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>






  

  );
};



    


export default Contact;
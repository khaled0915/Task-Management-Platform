import { useForm } from "react-hook-form";

const AddTask = () => {




    const {register , handleSubmit , reset} = useForm()

    const onSubmit = (data) => {
        
        console.log(data)

        reset();

    }



    
    
    
    





    return (
        <div className="mt-10 mr-5 ml-5 bg-gray-200">

            <h3 className=" font-bold text-center  text-3xl mb-10 underline text-sky-400"> here you can add your task </h3>


            







     <form onSubmit={handleSubmit(onSubmit)}   className="card-body">
        <div className="form-control">


          <label className="label">
            <span className=" text-lg  fon-bold label-text"> Title </span>
          </label>


          <input {...register("title")}  placeholder="title" className="input input-bordered" required />


        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-lg font-bold mx-auto label-text">Priority</span>
          </label>



          <select {...register("priority")} className="select mx-auto select-warning w-full max-w-xs text-center" >
  <option disabled selected>select your priority</option>
  <option value="low"> Low</option>
  <option value="moderate"> Moderate</option>
  <option value="high">High</option>
  
</select>



<textarea {...register("desc")}   className="textarea  textarea-warning mt-8" placeholder="add a description"></textarea>



<div className="mt-5">
<label className="label">
            <span className="label-text"> Deadline </span>
          </label>


          <input {...register("deadline")}  placeholder="deadline" className="input  input-bordered" required />
</div>





        
         
        </div>
        <div className="form-control mt-6">
          


          <input className="btn btn-success" type="submit" />



        </div>
      </form>





    







          
            
        </div>




    );

    }

export default AddTask;
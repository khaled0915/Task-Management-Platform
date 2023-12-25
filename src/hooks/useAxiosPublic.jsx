import axios from "axios";


const axiosPublic  = axios.create({
    baseURL : 'https://y-dusky-five.vercel.app'
})

const useAxiosPublic = () =>{
    return axiosPublic ;
}

export default useAxiosPublic;
// import axios from 'axios';
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';


// const inital={
//   userName:"",
//   email:"",
//   mobileNo:""

// }

// const Signup = () => {
 
// const [Sign,setSign]=useState(inital)
// const [Submit,setSubmit]=useState(false)

// const navigate=useNavigate();


// const handlechange=(e)=>{
//   const {name,value}=e.target;
//   setSign((prev)=>({
//     ...prev,[name]:value
//   }))
// }


// const handleSubmit=async(e)=>{

// try {
//   e.preventDefault()
//   setSign(true)
// await axios
// .post("http://localhost:8000/signup",Sign)
// .then((res)=>{
//   console.log(res)
//   setSign(inital)
//   navigate("/")

// })
// .catch((err)=>console.log(err))
// .finally(()=>setSubmit(false))


// } 

// catch (error) {
//   console.log(error); 
// }


// }


//   return (
//     <div className=" min-w-[100vh] flex justify-center h-screen bg-blue-600  items-center">
   
//           <div className="lg:w-[30%] w-[100%] min-h-[80vh] mx-[25px] lg:mt-[0px] lg:mx-[0px] mt-[40px]  shadow-xl shadow-blue-400 text-white bg-blue-500 flex flex-col justify-center items-center sm:gap-[30px] gap-[25px] py-[20px] rounded-[20px]">
       
//             <h2 className="sm:text-[26px] text-[20px] font-semibold">
//               Create your account
//             </h2>
//             <form
//               className="flex flex-col justify-center items-center gap-[30px] px-[10px]"
//               onSubmit={handleSubmit}
//             >
//               <div>
//                 <label className="font-semibold sm:text-[20px] text-[16px]">
//                   Name{" "}
//                 </label>
//                 <input
//                   className="py-[1px] sm:px-3 px-2 sm:w-[250px] w-[160px] sm:text-[16px]  text-black border-black text-[13px] ml-[40px]  border-[2px] outline-none"
//                   type="text"
//                   name="userName"
//                   placeholder="Enter Your name"
//                   value={Sign.userName}
//                   onChange={handlechange}
//                   required
                 
//                 />
//               </div>
//               <div>
//                 <label className="font-semibold sm:text-[20px] text-[16px] ">
//                   Email ID{" "}
//                 </label>
//                 <input
//                   className="py-[1px] sm:px-3 px-2 sm:w-[250px] w-[160px] sm:text-[16px] text-[13px] ml-[20px]  border-[2px] border-black  text-black outline-none"
//                   type="email"
//                   name="email"
//                   placeholder="Enter your Email ID"
//                   value={Sign.email}
//                   onChange={handlechange}
//                   required
                  
//                 />
//               </div>
//               <div>
//                 <label className="font-semibold sm:text-[20px] text-[16px]">
//                   Mobile No{" "}
//                 </label>
//                 <input
//                   className="py-[1px] sm:px-3 px-2 sm:w-[250px] w-[160px] sm:text-[18px] text-[13px] ml-[5px]  border-black  border-[2px]  outline-none text-black"
//                   type="number"
//                   name="mobileNo"
//                   placeholder="Enter your Mobile No"
//                   value={Sign.mobileNo}
//                   onChange={handlechange}
//                   required
//                 />
//               </div>
            
             
             
             
//               <div className="w-full flex justify-center">
//                 <button
//                   type="submit"
//                   className="py-[2px] sm:w-[150px] w-[75px] flex justify-center sm:rounded-xl text-black rounded-lg font-semibold sm:text-[18px] text-[14px] bg-blue-400  cursor-pointer"
//                 >
//                  {Submit ?"Submitting...":"Submit"}
//                 </button>
//               </div>
//             </form>
  
//             <p className="sm:text-[18px] text-[13px] font-medium">
//               Do you have an account?{" "}
//               <Link to={"/"} 
//                 className=" underline-offset-2 underline font-medium cursor-pointer"
//               >
//                 Login
//               </Link>
//             </p>
      
//           </div>
//           </div> 

//   )
// }

// export default Signup






import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const initial = {
  userName: '',
  email: '',
  mobileNo: ''
};

const Signup = () => {
  const [sign, setSign] = useState(initial);
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSign((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    try {
      await axios.post('http://localhost:8000/signup', sign);
      setSign(initial);
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setSubmit(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-gray-800">
        <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              type="text"
              name="userName"
              placeholder="Enter Your Name"
              value={sign.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={sign.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-medium">Mobile No</label>
            <input
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              type="number"
              name="mobileNo"
              placeholder="Enter Your Mobile No"
              value={sign.mobileNo}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-medium text-lg transition disabled:opacity-50"
            disabled={submit}
          >
            {submit ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? 
          <Link to="/Login" className="text-blue-500 hover:underline"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
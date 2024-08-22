import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import loginIcons from '../Assets/signin.gif';
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
        name:'',
        confirmpassword:'',
        profilepic:''
    })
    const navigate = useNavigate()

    const handleonChange = (e) =>{
        const {name, value} = e.target

        setData((prev) => {
            return {
                ...prev,
                [name]: value
    }
})
    }

    const handleUploadPic = async(e) => {
        const file = e.target.files[0]

        const imagePic =await imageTobase64(file)
       
        setData((prev) => {
            return {
                ...prev,
                profilepic: imagePic
            }
        })

    }
    const handleSubmit = async(e) => {
        e.preventDefault()

        if(data.password !== data.confirmpassword){
            const dataResponse =await fetch(SummaryApi.signUP.url,{
                method: SummaryApi.signUP.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const dataApi = await dataResponse.json()

            if(dataApi.success){
                toast.success(dataApi.message)
                navigate('/login')
            }
            if(dataApi.error){
                toast.error(dataApi.message)
            }

            
        }else{
            console.log("please check password and confirm password")
        }
        
        
    }
    
  return (
    <section id='signup'>
        <div className='mx-auto container p-4'>

            <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>

                <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                    <div>
                    <img src={data.profilepic || loginIcons} alt='loginicons' />
                    </div>
                    <form>
                        <label>
                        <div className='text-xs bg-opacity-75 bg-slate-200 p-1 py-1 text-center absolute bottom-0 width-full'>
                        Upload photo
                    </div>
                            <input type='file' className='hidden' onChange={handleUploadPic} />
                            </label>
                    
                    </form>
                </div>
                <form className='pt-6 flex flex-col gap-2' onSubmit= {handleSubmit}>
                <div  className='grid'>
                        <label>Name: </label>
                        <div className='bg-slate-100 p-2'>
                        <input 
                        type='text' 
                        placeholder='Enter your name'
                        name="name" 
                        value={data.name}
                        onChange={handleonChange}
                        required
                        className='w-full outline-none bg-transparent'/>
                        </div>
                    </div>
                   
                    <div  className='grid'>
                        <label>Email: </label>
                        <div className='bg-slate-100 p-2'>
                        <input 
                        type='email' 
                        placeholder='Enter email'
                        name="email" 
                        value={data.email}
                        onChange={handleonChange}
                        required
                        className='w-full outline-none bg-transparent'/>
                        </div>
                    </div>

                    <div>
                        <label>Password:  </label>
                       <div className='bg-slate-100 p-2 flex'>
                       <input 
                       type={showPassword ? "text" : "password"} 
                       placeholder='Enter password'
                          name="password"
                            value={data.password}
                       onChange={handleonChange} 
                       required
                       className='w-full outline-none bg-transparent' />
                       <div className='cursor-pointer tx-xl' onClick={()=>setShowPassword((prev) =>!prev)}>
                        <span>
                            { 
                            showPassword ? (
                                <FaEyeSlash/>
                            
                            ) 
                            :
                            (
                                <FaEye />
                            )
                            
                            }
                            
                            
    
                        </span>
                       </div>
                

                       </div>
                       
                    </div>
                    <div>
                        <label>Confirm Password:  </label>
                       <div className='bg-slate-100 p-2 flex'>
                       <input 
                       type={showConfirmPassword ? "text" : "password"} 
                       placeholder='Enter  confirm password'
                          name="confirmpassword"
                            value={data.confirmpassword}
                       onChange={handleonChange} 
                       required
                       className='w-full outline-none bg-transparent' />
                       <div className='cursor-pointer tx-xl' onClick={()=>setShowConfirmPassword((prev) =>!prev)}>
                        <span>
                            { 
                            showConfirmPassword ? (
                                <FaEyeSlash/>
                            
                            ) 
                            :
                            (
                                <FaEye />
                            )
                            
                            }
                            
                            
    
                        </span>
                       </div>
                

                       </div>
                       
                    </div>

                    <button className='bg-orange-400 hover:bg-orange-700 text-white px-6 py-2  w-max-[150px] rounded-full hover:scale-110 trasition-all mx-auto block mt-4'>SignUp</button>
                </form>
                
                    <p className="my-4">Already have an account? <Link to={'/login'} className='text-orange-400 hover:underline'>Login</Link></p>


                    </div>
            


            </div>
        </section>
  )
}
    
export default SignUp
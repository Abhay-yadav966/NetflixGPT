import React from 'react'
import Logo from '../../assets/Logos-Readability-Netflix-logo.png'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../../services/operations/authAPI'
import { useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";

const Navbar = () => {

    const {token} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const userLogo = "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"


    // fn
    const handleLogOut = () => {
        dispatch(logout(navigate));
    }

  return (
    <div className='flex h-fit flex-row items-center justify-between absolute top-0 left-0 w-full bg-gradient-to-b from-black via-black' >
        {/* image */}
        <div>
            <img src={Logo} alt="logo" className='h-[150px] w-[270px]'/>
        </div>


        {/* after validation */}
        <div>
            {
                token && (
                    <div className='flex items-center gap-5 mr-12 ' >
                        {/* GPT search button */}
                        <button
                            onClick={() => navigate("/search")}
                            className='text-white'
                        >
                            <IoSearch size={30} />
                        </button>
                        {/* logo */}
                        <img src={userLogo} alt="" className='rounded-sm' />
                        {/* sign out button */}
                        <button
                            className='rounded-lg border border-[#2C333F] px-3 py-2 font-inter font-medium text-base text-[#AFB2BF] bg-[#161D29]'
                            onClick={handleLogOut}
                        >
                            Logout
                        </button>
                </div>)
            }
        </div>
    </div>
  )
}

export default Navbar;
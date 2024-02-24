import { useState } from "react"
import Signup from "../components/Signup"
import Personalinfo from "../components/Personalinfo"
import Moreinfo from "../components/Moreinfo"
import logo from "../assets/pie-chart.png"

const Form = () => {

  const titles = ["Sign Up", "Personal Info", "More Info"]

  const [page, setPage] = useState(0)

  return (
    <div className="bg-gradient-to-r from-slate-100 to-red-600 w-full h-full min-h-full flex flex-col justify-center py-36 sm:px-6 lg:px-8 z-100 md:h-screen  ">
       <div>
        <div>
           Progress Bar
        </div>
       </div>

       <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-24 w-auto" src={logo} alt="logo"/>
        <h1 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
            {titles}
        </h1>
       </div>

       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          Form
          <div>Logic</div>
          <div className="flex flex-row gap-3 pt-8">
            <button className="flex cursor-pointer w-full jusify-center rounded-md border border-transparent bg-[#bf202f] py-2 px-4 text-sm text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-offset">Prev</button>
            <button className="flex cursor-pointer w-full jusify-center rounded-md border border-transparent bg-[#bf202f] py-2 px-4 text-sm text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-offset">Next</button>
          </div>
        </div>
       </div>
       
    </div>
  )
}

export default Form
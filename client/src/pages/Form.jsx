import { useState } from "react"
import Signup from "../components/Signup"
import Personalinfo from "../components/Personalinfo"
import Moreinfo from "../components/Moreinfo"
import logo from "../assets/pie-chart.png"

const Form = () => {
  const [page, setPage] = useState(0)
  const [data, setData] = useState ({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    address: '',
    course: '',
    phone: ''
  })

  const titles = ["User Info", "Personal Info", "More Info"]

  const pageDisplay = () => {
    if (page == 0) {
      return <Signup data={data} setData={setData} />
    } else if (page == 1) {
      return <Personalinfo data={data} setData={setData}/>
    } else {
      return <Moreinfo data={data} setData={setData}/>
    }
  }
  
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
            {titles[page]}
        </h1>
       </div>

       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>{pageDisplay()}</div>
            <div className="flex flex-row gap-3 pt-8">
              <button 
                disabled={page == 0} 
                onClick={()=> {
                  setPage((currPage) => currPage -1)
                }}
                className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#bf202f] py-2 px-4 text-sm text-white font-medium hover:bg-indigo-400 focus:outline-none focus:ring-offset">
                Prev</button>

              <button 
              onClick={(e) => {
                if (page === titles.length - 1) {
                  alert ('Form submitted')
                } else {
                  setPage ((currPage) => currPage + 1)
                }
              }}
              className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#bf202f] py-2 px-4 text-sm text-white font-medium hover:bg-indigo-400 focus:outline-none focus:ring-offset">
                {page === titles.length -1 ? "Submit" : "Next"} </button>
            </div>
          </div>
        </div>
       </div>
  )
}

export default Form
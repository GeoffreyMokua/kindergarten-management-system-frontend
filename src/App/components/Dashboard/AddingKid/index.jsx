import React, {useState} from "react";
import { Link,useNavigate } from "react-router-dom";


function AddKid() {
  const teacherData = localStorage.getItem("teacher_data")
  const navigate = useNavigate()
  const [notify, setNotify] = useState(false)
  let data = JSON.parse(teacherData)
  const token = localStorage.getItem("teacherToken");
  const [addKid, setAddKid] = useState({
    first_name: "",
    second_name:"",
    surname:"",
    age: "",
    description: "",
    admission_number: "",
    classroom_id: data.teacher.classroom.id
})

const kid = localStorage.getItem("kids")
const state = localStorage.getItem("kidState")
function handleClose() {
  setTimeout(()=>{
    navigate(-1)
  },3000)
}

function handleModal() {
  setNotify(true)
  handleClose()
}


  function handleSubmit(e){
    e.preventDefault()
    fetch("/students",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(addKid)
    }).then((res)=> res.json())
      .then((res) =>{
        handleModal()
        state([...kid, res])
      
      })

  }



  return (
    <div className=" w-1/2 m-auto">

      <div className="pt-8">
        <div>
          <h1 className="text-center text-3xl font-bold text-[#B124A3]">
            Adding New Student Information
          </h1>
          
        </div>
        <form onSubmit={handleSubmit}>
          {notify ? <div className="w-full bg-[#B124A3] rounded-md text-center text-white text-xl">Kid added succesfully</div>:null}
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className=" text-lg font-medium text-[#B124A3]"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="First name"
                  autoComplete="given-name"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#B124A3]"
                  onChange={(e)=> setAddKid({...addKid, first_name: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="Second name"
                className="block text-lg font-medium text-[#B124A3]"
              >
                Second Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="second_name"
                  id="second_name"
                  autoComplete="family-name"
                  placeholder="Second name"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#B124A3]"
                  onChange={(e)=> setAddKid({...addKid, second_name: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="surname"
                className="block text-lg font-medium text-[#B124A3]"
              >
                Surname
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  autoComplete="family-name"
                  placeholder="Surname"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#B124A3]"
                  onChange={(e)=> setAddKid({...addKid, surname: e.target.value})}
                  required
                />
              </div>
              
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="surname"
                className="block text-lg font-medium text-[#B124A3]"
              >
                Admission Number
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="admission_number"
                  id="admission_number"
                  autoComplete="family-name"
                  placeholder="Admission Number"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#B124A3]"
                  onChange={(e)=> setAddKid({...addKid, admission_number: e.target.value})}
                  required
                />
              </div>
            </div>

            

            <div className="md:col-span-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-[#B124A3]"
              >
                Description of the student
              </label>
              <div className="mt-1">
                <textarea
                  id="text"
                  name="text"
                  type="text"
                  placeholder="Write description Here"
                  autoComplete="description"
                  className="block w-full rounded-md border-gray-700 shadow-xl sm:text-lg"
                  onChange={(e)=> setAddKid({...addKid, description: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="Age"
                className="block text-lg font-medium text-[#B124A3]"
              >
                Age
                {/* onChange={(e)=> setAddKid({...addKid, age: e.target.value})} */}
              </label>
              <div className="dropdown inline-block relative">
                <select
                  id="age"
                  name="age of kid"
                  autoComplete="Age of kid "
                  className="bg-gray-300 text-[#B124A3] font-semibold py-2 px-4 rounded inline-flex items-center mr-1 "
                  onChange={(e)=> setAddKid({...addKid, age: e.target.value})}
                  required
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
              
            </div>
            
          </div>
          <div className="flex justify-center px-4 pt-4">
            <div className="md:col-span-3 w-1/3 rounded flex items-center">
            <button className="px-10 p-3 bg-[#B124A3] text-white rounded-md"
                type="submit">
             Save
              </button>
            </div>

            <div className="sm:col-span-3 w1/2 rounded flex items-center">
              <Link to="..">
              <button  className="px-10 p-3 bg-[#B124A3] text-white rounded-md"
                type="submit">
               Back
              </button>
              </Link>
            </div>
            </div>
        </form>
      </div>
      
    </div>
  );
}

export default AddKid;

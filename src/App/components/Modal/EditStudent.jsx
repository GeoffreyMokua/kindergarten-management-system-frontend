import React from 'react'
import "./editstudent.css"
import {useForm} from 'react-hook-form'

const token = localStorage.getItem("teacherToken")

function EditStudent({setEdit, editId, setStudents}) {
    const {register, handleSubmit} = useForm()
    
    function handleEdit(){
        setEdit(false)
}

    function onSubmit(data){
        console.log(editId, data)
        // handleEdit()
        fetch(`http://localhost:3000/students/${editId}`,{
            method: "PATCH",
            headers:{
                "Content-Type" : "application/json",
                Authorization : `Bearer ${token}`
            },
            body: JSON.stringify(data),
        }).then((res) => res.json())
          .then(res=> {setStudents(res)
           handleEdit()  
        })
    }

  return (
    <div className='edit-modal'>
        <div className='edit-card'>
        <div className="input-container">
            <form className='input-form' onSubmit={handleSubmit(onSubmit)}>
                <label>Age:</label>
                <input type="number" className='age' {...register('age')}/>
                <label>Description:</label>
                <input type="text" className='description' {...register('description')}/>
                <button className="button-12" type="button" onClick={handleEdit}>Back</button>
                <button className="button-13" type="submit" >Edit</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default EditStudent
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

function AddStudent(){
    // let history = useNavigate();
    const [student,setStudent]=useState({
        first_name:"",
        last_name:"",
        email:"" 
    })
    const {first_name,last_name,email} = student;
    const handleChange = (e) => {
        setStudent({...student,[e.target.name]: e.target.value})
    }
    const submitForm = async(e) => {
        e.preventDefault();
        console.log(student);
        await axios.post("http://localhost/insert.php", student).then((result)=>{
            console.log(result);
            alert('Hello!!!');
            if(result.data.status==='valid'){
                // history(`/`);
                alert('There is problem in adding, please try again');
            }
            else{
                alert('There is problem in adding, please try again');
            }
        })    
    }
    return(
        <form onSubmit={e => submitForm(e)}>
            <div className="box-size">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Add student</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">Firstname</div>
                    <div className="col-md-6">
                        <input type="text" name="first_name" value={first_name} onChange={e => handleChange(e)} className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">Laststname</div>
                    <div className="col-md-6">
                        <input type="text" name="last_name" value={last_name} onChange={e => handleChange(e)} className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">Email</div>
                    <div className="col-md-6">
                        <input type="email" name="email" value={email} onChange={e => handleChange(e)} className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <input type="submit" name="submit" value="Add student" className="btn btn-warning"/>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default AddStudent
import React from 'react'
import Header from '../sections/Header';
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit(onSubmit)} style={{padding: "100px"}}> 
                <input defaultValue="test" {...register("example")}/>
                <input {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login

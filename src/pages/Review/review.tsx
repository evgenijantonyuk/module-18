
import { SubmitHandler, useForm } from "react-hook-form"

import "./style.css"

type FormType = {
    user_name: string,
    user_email: string,
    category: string,
}

const Review = () => {

    const { register, handleSubmit, formState: {errors}} = useForm<FormType>()
    console.log(errors)

    const onSubmit: SubmitHandler<FormType> = (data) => {
        console.log(data)
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p className="title">Order for Jelly Belly</p>
                <label>
                    Name: <input className="input" type="text" {...register("user_name", {
                    required: {
                        value: true,
                        message: "Поле обязательно",
                    }, minLength: {
                        value: 2,
                        message: "В поле недостпточно символов"
                    }
                })} placeholder="Enter Useer Name"/>
                </label>
                {errors.user_name && <p>{errors.user_name.message}</p>}
            </div>
            <div>
            <label>
                    E-mail: <input className="input" type="email" {...register("user_email", {
                        required: true })} {...register("user_email", {
                    required: {
                        value: true,
                        message: "Поле обязательно",
                    } })} placeholder="Enter Email"/>
                </label>
                {errors.user_email && <p>{errors.user_email.message}</p>}
            </div>
            <div>
                <select className="select" {...register("category")}>
                    <option className="option" value="a">Select  Jelly Belly A</option>
                    <option className="option" value="b">Select  Jelly Belly B</option>
                    <option className="option" value="c">Select  Jelly Belly C</option>
                </select>
            </div>
            <input className="button" type="submit"/>
        </form>
    )
}

export default Review
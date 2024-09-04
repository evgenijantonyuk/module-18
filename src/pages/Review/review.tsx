
import { SubmitHandler, useForm } from "react-hook-form"

import "./review.css"

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
                <label>
                    Name: <input className="input" type="text" {...register("user_name", {
                        required: {
                        value: true,
                        message: "Поле обязательно",
                    }, minLength: {
                        value: 2,
                        message: "В поле недостпточно символов"
                    } })} placeholder="Enter Useer Name"/>
                </label>
                {errors.user_name && <p>{errors.user_name.message}</p>}
            </div>
            <div>
                <label>
                    E-mail: <input className="input" type="email" {...register("user_email", { required: true })} placeholder="Enter Email"/>
                </label>
            </div>
            <div>
                <select className="select" {...register("category")}>
                    <option className="option" value="a">Select A</option>
                    <option className="option" value="b">Select B</option>
                    <option className="option" value="c">Select C</option>
                </select>
            </div>
            <input type="submit"/>
        </form>
    )
}

export default Review
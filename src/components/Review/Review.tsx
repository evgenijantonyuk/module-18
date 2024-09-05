import { Link } from "react-router-dom"
import { FC} from "react"

const Review: FC = () => {
        return (
            <Link to={`/BeansProject/Review/review`}>
                <form>
                    <div>
                        <label>
                            Name: <input type="text" placeholder="Enter Useer Name"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            E-mail: <input type="email" placeholder="Enter Email"/>
                        </label>
                    </div>
                    <div>
                        <select>
                            <option value="a">Select A</option>
                            <option value="b">Select B</option>
                            <option value="c">Select C</option>
                        </select>
                    </div>
                    <input type="submit"/>
                </form>
            </Link>
        )
}

export default Review;
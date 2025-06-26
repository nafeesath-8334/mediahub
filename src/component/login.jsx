import "../styles/login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const Login = () => {
    return (

        <div className="wrapper">
            <form action="">
                <h2>Login</h2>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="Password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>
                <div className="remember-frorgot">
                    <labe>
                        <input type="checkbox" />Remember me
                    </labe>
                    <a href="#">ForgotPassword</a>

                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>
                        Don't have an account?<a href="#">Register</a>
                    </p>

                </div>
            </form>

        </div>

    )
}
export default Login
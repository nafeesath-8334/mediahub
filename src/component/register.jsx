import "../styles/register.css";
const Register = () => {
    return (
        <div>
            <div className="wrapper1">
                <form action="">
                    <h2>Register</h2>
                    <div className="input-box1">
                        <label>FirstName</label>
                        <input type="text" placeholder="firstName" required />
                    </div>
                    <div className="input-box1">
                        <label>LastName</label>
                        <input type="text" placeholder="LastName" required />
                    </div>
                    <div className="input-box1">
                        <label>Email</label>
                        <input type="email" placeholder=" Email " required />
                    </div>
                    <div className="input-box1">
                        <label>Password</label>
                        <input type="password" placeholder=" Password " required />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )

}
export default Register
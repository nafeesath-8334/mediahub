import "../styles/style.css";
const Register = () => {
    return (
        <div>
            <div className="wrapper">
                <form action="">
                    <h2>Register</h2>
                    <div className="input-box">
                        <label>FirstName</label>
                        <input type="text" placeholder="firstName" required />
                    </div>
                    <div className="input-box">
                        <label>LastName</label>
                        <input type="text" placeholder="LastName" required />
                    </div>
                    <div className="input-box">
                        <label>Email</label>
                        <input type="email" placeholder=" Email " required />
                    </div>
                    <div className="input-box">
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
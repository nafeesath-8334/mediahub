import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const isLoggedIn = useSelector((state) => state.mediahub.isLoggedIn)
    const navigate = useNavigate()

    const [isAllowed, setIsAllowed] = useState(!!localStorage.getItem("userCredentials"))
    useEffect(() => {
       const  checkAuthStatus = () => {
            const isAuthenticated = !!localStorage.getItem('userCredentials');
            if (isAuthenticated) {
                setIsAllowed(true);
            } else {
                setIsAllowed(false);
                navigate("/login");
            }

        }
        checkAuthStatus()
        const handleStorageChange = (event) => {
            console.log(event.storageArea)
            console.log(event.storageArea === localStorage);

            if (event.storageArea === localStorage) {
                checkAuthStatus();
                alert("working")
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };

    }, [isLoggedIn])
    return isAllowed ? <>{children}</> : null;
}
export default ProtectedRoute
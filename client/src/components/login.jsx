import {  useWeb3Store } from "../context/web3Instance";
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import login from "../utils/login.js";
import { toast } from "sonner";

function Login() {

    const { 
        web3, 
        isConnected, 
        setWeb3,
    } = useWeb3Store();

 
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const result = await login();
            if (result.error) {
                toast.error(result.error);
                return;
            }    
            await setWeb3(result.web3);
            navigate('/home');
        } catch (error) {
            toast.error(error.message);
        }
    };


    useEffect(() => {
        const checkConnection = async () => {
            if (isConnected && !web3) {
                navigate("/");
            } else if (isConnected && web3) {
                navigate('/home');
            }
        };
        checkConnection();
    }, [isConnected, navigate, web3]);

   

 


    return (
        <div className="p-4">
            {!isConnected || !web3 ? (
                <button 
                    onClick={handleLogin}
               
                >
                    Connect Wallet
                </button>
            ) : <Navigate to="/home" />
            }
        </div>
    );
}

export default Login;

import Web3 from "web3";


const login = async () => {
    try {
        if (!window.ethereum) {
            return { success: null, error: "Ethereum wallet not found. Please install MetaMask." };
        }

        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });


        return { web3, error: null };
    } catch (err) {

        return { web3: null, error: err.message };
    }
};


export default login;


import { Navigate } from "react-router-dom";
import { useWeb3Store } from "../context/web3Instance";
import createBounty from "../utils/create";
import Bounties from "./bounties";

export default function Home() {
    const { web3, isConnected, loading } = useWeb3Store();
   

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-xl">Loading...</h1>
            </div>
        );
    }

    if (!isConnected || !web3) {
        return <Navigate to="/" />;
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Web3 Dashboard</h1>
            <button 
                onClick={createBounty} 
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Create Bounty
            </button>
            <br />
            <br />

            <br />
            <br />

            <Bounties />
        </div>
    );
}

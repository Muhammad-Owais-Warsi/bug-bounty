import { Navigate } from "react-router-dom";
import { useWeb3Store } from "../context/web3Instance";
import createBounty from "../utils/create";
import Bounties from "./bounties";
import Header from "./navbar";

export default function Home() {
    const { web3 } = useWeb3Store();
   
    if (!web3) {
        return <Navigate to="/" />;
    }

    return (
        <div className="p-8">
            <Header />
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

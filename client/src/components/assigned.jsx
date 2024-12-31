import { useEffect, useState } from "react"
import api from "../utils/axios";
import { useWeb3Store, web3PersistedStore } from "../context/web3Instance";
import { Navigate } from "react-router-dom";

export default function GetAssignedBounties() {

    const walletAddress = web3PersistedStore.getState().walletAddress
    const { web3, isConnected } = useWeb3Store();

    const [bounties, setBounties] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {

        const getAssignedBounties = async () => {
            try {
                const response = await api.post("/getAssignedBounties", {
                    walletAddress: walletAddress
                });

       
                setBounties(response.data.message);

            } catch (error) {
                setError(error.message);
            }
        };

        getAssignedBounties();

    }, [walletAddress]);

    if (!isConnected || !web3) {
        return <Navigate to="/" />;
    }

    return (
        <>
            {error && !bounties ? (
                <>Error</>
            ) : (
                bounties && bounties.length > 0 ? (
                    bounties.map((bounty, index) => (
                        <li key={index} className="mb-4 p-4 border rounded shadow">
                            <div><strong>ID:</strong> {bounty.id}</div>
                            <div><strong>Title:</strong> {bounty.title}</div>
                            <div><strong>Description:</strong> {bounty.description}</div>
                            <div><strong>Amount:</strong> {bounty.amount}</div>
                            <div>{bounty.applicants.length}</div>
                        </li>
                    ))
                ) : (
                    <>No bounties found</>
                )
            )}
        </>
    )
}
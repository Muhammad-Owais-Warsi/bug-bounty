import { useEffect, useState } from "react";
import api from "../utils/axios.js";
import apply from "../utils/apply.js";
import refund from "../utils/refund.js";

export default function Bounties() {

    const [bounties, setBounties] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {

        const getBounties = async () => {
            const response = await api.get("/getAllBounties");

            if (response) {
                setBounties(response.data.message);
                return;
            }
            setError(response.data.message);
        }

        getBounties();

    }, [])

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
                            <button
                               onClick={apply}
                                className="px-4 py-2 bg-green-500 text-white rounded"
                            >
                                Apply 
                            </button>
                            <button onClick={refund}>refund</button>
                        </li>
                    ))
                ) : (
                    <>No bounties found</>
                )
            )}
        </>

    )
}
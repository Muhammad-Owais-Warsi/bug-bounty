import ABI from "../abi/test.json"
import { web3MemoryStore,web3PersistedStore } from "../context/web3Instance.js";
import api from "./axios.js";


const CONTRACT_ADDRESS = "0x358AA13c52544ECCEF6B0ADD0f801012ADAD5eE3"

const id = "124";
const links = ["o.com","p.com"];

export default async function apply() {

    const walletAddress = web3PersistedStore.getState().walletAddress
    const web3 = web3MemoryStore.getState().web3Instance;
    

    const contractInstance = new web3.eth.Contract(ABI,CONTRACT_ADDRESS);

    try {
        const result = await contractInstance.methods.avail(id,links).send({from:walletAddress});
        if(result) {
            const response = api.post("/apply",{
                id:id,
                links:links,
                address:walletAddress
            })

            return {sucess:response.data.message,error:null}
 
        }
    } catch (error) {
        return {success:null,error:error}
    }

}
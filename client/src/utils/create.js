import {  web3MemoryStore, web3PersistedStore } from "../context/web3Instance";
import ABI from "../abi/test.json";
import api from "./axios.js"

const CONTRACT_ADDRESS = "0x9396B453Fad71816cA9f152Ae785276a1D578492"

//for testing only
const id="124"
const title="test"
const description="test"
const links=["o.com","p.com"]
let amount="1"

export default async function createBounty() {

    const walletAddress = web3PersistedStore.getState().walletAddress
    const web3 = web3MemoryStore.getState().web3Instance;


    const contractInstance = new web3.eth.Contract(ABI,CONTRACT_ADDRESS);

   
    try {
        const result = await contractInstance.methods.create(id,"1").send({
            from:walletAddress,
            value:web3.utils.toWei("0.00000001","ether")
        });
        if(result) {
          
            const response = await api.post("/create",{
                id:id,
                creator:walletAddress,
                title:title,
                description:description,
                links:links,
                amount:amount
            });

            return {success:response.data.message,error:null}
        }
        return {success:null,error:"Unknown error occured. Please try again later"}
    } catch (error) {
        return {success:null,error:error.message};
    }

}
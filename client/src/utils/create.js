import {  web3MemoryStore, web3PersistedStore } from "../context/web3Instance";
import ABI from "../abi/test.json";
import api from "./axios.js"

const CONTRACT_ADDRESS = "0x7b96aF9Bd211cBf6BA5b0dd53aa61Dc5806b6AcE"

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
        const result = await contractInstance.methods.create(id,amount).send({from:walletAddress});
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
import { web3 } from "./web3"
import DiplomaStorageABI from "./DiplomaStorageABI"

export function createContract(contractAddress) {
    return new web3.eth.Contract(DiplomaStorageABI, contractAddress)
}
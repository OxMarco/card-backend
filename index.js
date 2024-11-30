import { Client } from "@covalenthq/client-sdk";

// Your code here
const ApiServices = async () => {
    const client = new CovalentClient("cqt_rQtw8GqQ7cfXHBjXPtT7V6qG4r8J");
    const resp = await client.BalanceService.getTokenBalancesForWalletAddress("eth-mainnet", "demo.eth");
    console.log(resp.data);
};
// Call the ApiServices function to execute the API call
ApiServices();

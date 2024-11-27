import { CovalentClient } from "@covalenthq/client-sdk";

const ApiServices = async () => {
    const client = new Client("cqt_rQtw8GqQ7cfXHBjXPtT7V6qG4r8J");
    const resp = await client.BalancesService.getTokenBalancesForWalletAddress({
        chainId: "eth-mainnet",
        address: "demo.eth"
    });
    console.log(resp.data);
};

// Call the function to execute the API call
ApiServices();

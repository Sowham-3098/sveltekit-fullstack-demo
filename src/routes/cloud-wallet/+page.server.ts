import  NeucronSDK from 'neucron-sdk';




/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ request }) => {
        const data = await request.formData();
        const neucron = new NeucronSDK();
        const authModule = neucron.authentication;
        const walletModule = neucron.wallet;

        const loginResponse = await authModule.login({
           email : data.get ('email'),
           password : data.get('password'),
        });
        console.log(loginResponse);
        const DefaultWalletBalance = await walletModule.getWalletBalance({});
        console.log(DefaultWalletBalance);

        // const addresses = await walletModule.getAddressesByWalletId({});
        // console.log(addresses);


        // const walletHistory = await walletModule.getWalletHistory({});
        // console.log(walletHistory);

        return { success: true , balance: DefaultWalletBalance.data.balance.summary};
    },
    pay: async ({ request }) => {
        const data = await request.formData();
        const neucron = new NeucronSDK();
        const authModule = neucron.authentication;
        const walletModule = neucron.wallet;

        const loginResponse = await authModule.login({
           email : data.get ('email'),
           password : data.get('password'),
        });
        console.log(loginResponse);
        const DefaultWalletBalance = await walletModule.getWalletBalance({});
        console.log(DefaultWalletBalance);

        // const addresses = await walletModule.getAddressesByWalletId({});
        // console.log(addresses);

        const options ={
            outputs: [
                {
                    address: data.get('paymail'),
                    note : 'guru pay',
                    amount: data.get('amount'),
                },
            ],  
        }

        const payResponse = await neucron.pay.txSpend(options);
        console.log(payResponse);

        // const walletHistory = await walletModule.getWalletHistory({});
        // console.log(walletHistory);

        return { success: true , payResponse: payResponse};
    }
};




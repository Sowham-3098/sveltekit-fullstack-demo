<script lang="ts">
    import {PrivateKey} from '@bsv/sdk';
    let WIF:string
    let address:string

    function createKeys(){
        const privKey = PrivateKey.fromRandom()
        WIF = privKey.toWif()
        console.log("private key WIF format: ", WIF)

        address = privKey.toAddress()
        console.log("Your bitcoin address: ", address)
    }
</script>

<section>
    <button on:click={createKeys}> Generate Keys </button>
    <p>Private key WIF format is {WIF}</p>
    <p>Your bitcoin address is {address}</p>
</section>
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain punch gloom problem off topple'; 
let testAccounts = [
"0x88664278470ad7c8a3ab2a1fdf45a581d11ff851f0af781a7a6b02c6cd3ceaf7",
"0xe48ee0874370dbf35de81aaa9ae436292c4c95a2e339300281821dbeea6d7e8b",
"0x1a8910b8773ea00d36e8249624eb7a7b7285f89c8516fb4b6b88026b61883a94",
"0x83dfdb245dd6577f4ac91b208438b4ac7e6b419976161015909b233d537e9309",
"0xf28383f65fdb0f45b774de91bd9921dbb654ebffae886c131c2c7cdc63c52bb0",
"0x486091b1e02271a61a047bf8bd0d01f8ee7847addcd6c12a9247c945056f53ae",
"0x2b443bbc4f6220ae77a7d428aa1f91369f9ac648e425b57c67eedcbe5b953fc2",
"0x0fc490ed7525b6bc425e476b387e67ce3d182b5f96936c761e72b356b95054b4",
"0xbcc081290a998840ad7df3b7a3e05c6c3e6a4e44fa789a3df8dd9d6c95577ca9",
"0xfdf20f7c042b94d419d4270146fd4f92e9c3fac6785006d7af5c75ef3aaf3aeb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


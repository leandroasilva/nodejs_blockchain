const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('492e4babc9b302c86b461a55fcc6f8f528b2b5ba54bd9368a2059ee96b9f20ad');
const myWalletAddress = myKey.getPublic('hex');

let halkKoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10)
tx1.signTransaction(myKey);
halkKoin.addTransaction(tx1);

console.log('\n Starting the miner...');
halkKoin.minePendingTransactions(myWalletAddress);

console.log('\Balance of Leandro is ', halkKoin.getBalanceOfAddress(myWalletAddress));

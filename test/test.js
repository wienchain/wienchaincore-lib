'use strict';

var wienchaincore = require('..');
var Mnemonic = require('../index').Mnemonic;
var Address = wienchaincore.Address;
const PublicKey = wienchaincore.PublicKey;


var mnemonic = new Mnemonic();
console.log(mnemonic);
var xprivateKey = mnemonic.toHDPrivateKey();
console.log(xprivateKey);
var privateKey = xprivateKey.derive('m/0\'/0/0\'').privateKey;
console.log(privateKey);
console.log(privateKey.toWIF());
var publicKey = new PublicKey(privateKey);
console.log(publicKey);
var publicKeyStr = publicKey.toString();
console.log(publicKeyStr);
var address = new Address(publicKey);
console.log(address);
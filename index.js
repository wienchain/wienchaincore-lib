/* eslint-disable */
// TODO: Remove previous line and work through linting issues at next edit

'use strict';

var wienchaincore = module.exports;

// module information
wienchaincore.version = 'v' + require('./package.json').version;
wienchaincore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of wienchaincore-lib found. ' +
      'Please make sure that you are not mixing instances of classes of the different versions of wienchaincore.';
    console.warn(message);
  }
};
wienchaincore.versionGuard(global._wienchaincore);
global._wienchaincore = wienchaincore.version;

// crypto
wienchaincore.crypto = {};
wienchaincore.crypto.BN = require('./lib/crypto/bn');
wienchaincore.crypto.ECDSA = require('./lib/crypto/ecdsa');
wienchaincore.crypto.Hash = require('./lib/crypto/hash');
wienchaincore.crypto.Random = require('./lib/crypto/random');
wienchaincore.crypto.Point = require('./lib/crypto/point');
wienchaincore.crypto.Signature = require('./lib/crypto/signature');

// encoding
wienchaincore.encoding = {};
wienchaincore.encoding.Base58 = require('./lib/encoding/base58');
wienchaincore.encoding.Base58Check = require('./lib/encoding/base58check');
wienchaincore.encoding.BufferReader = require('./lib/encoding/bufferreader');
wienchaincore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
wienchaincore.encoding.Varint = require('./lib/encoding/varint');

// utilities
wienchaincore.util = {};
wienchaincore.util.buffer = require('./lib/util/buffer');
wienchaincore.util.js = require('./lib/util/js');
wienchaincore.util.preconditions = require('./lib/util/preconditions');
wienchaincore.util.hashUtil = require('./lib/util/hashutil');
wienchaincore.util.merkleTree = require('./lib/util/merkletree');

// errors thrown by the library
wienchaincore.errors = require('./lib/errors');

// main bitcoin library
wienchaincore.Address = require('./lib/address');
wienchaincore.Block = require('./lib/block');
wienchaincore.MerkleBlock = require('./lib/block/merkleblock');
wienchaincore.SimplifiedMNList = require('./lib/deterministicmnlist/SimplifiedMNList');
wienchaincore.SimplifiedMNListDiff = require('./lib/deterministicmnlist/SimplifiedMNListDiff');
wienchaincore.SimplifiedMNListEntry = require('./lib/deterministicmnlist/SimplifiedMNListEntry');
wienchaincore.BlockHeader = require('./lib/block/blockheader');
wienchaincore.HDPrivateKey = require('./lib/hdprivatekey.js');
wienchaincore.HDPublicKey = require('./lib/hdpublickey.js');
wienchaincore.Networks = require('./lib/networks');
wienchaincore.Opcode = require('./lib/opcode');
wienchaincore.PrivateKey = require('./lib/privatekey');
wienchaincore.PublicKey = require('./lib/publickey');
wienchaincore.Script = require('./lib/script');
wienchaincore.Transaction = require('./lib/transaction');
wienchaincore.GovObject = require('./lib/govobject');
wienchaincore.URI = require('./lib/uri');
wienchaincore.Unit = require('./lib/unit');
wienchaincore.Message = require('./lib/message');
wienchaincore.Mnemonic = require('./lib/mnemonic');
wienchaincore.BloomFilter = require('./lib/bloomfilter');

// dependencies, subject to change
wienchaincore.deps = {};
wienchaincore.deps.bnjs = require('bn.js');
wienchaincore.deps.bs58 = require('bs58');
wienchaincore.deps.Buffer = Buffer;
wienchaincore.deps.elliptic = require('elliptic');
wienchaincore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
wienchaincore.Transaction.sighash = require('./lib/transaction/sighash');

// import axios from "axios";
// import sha256 from "js-sha256";

// let appID = 17350600050;
// let timestamp = Math.floor(+new Date() / 1000)
// let secret = "K3NK2CEFQCQX4VV33UNACMNOXFQWOTK4";
// var payload =
//   'mutation{ generateShortLink( input:{ originUrl: "https://shopee.vn/Apple-Iphone-11-128GB-Local-Set-i.52377417.6309028319" } ) { shortLink } }';

// let factor = appID + timestamp + payload + secret;

// let signature = sha256(factor);

// axios.defaults.headers.common["Authorization"] =
//   "SHA256 Credential=" +
//   appID +
//   ",Timestamp=" +
//   timestamp +
//   ",Signature=" +
//   signature;

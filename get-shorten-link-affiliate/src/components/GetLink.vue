<template>
  <form @submit.prevent="getLink">
    <button type="submit">Get Data</button>
  </form>
</template>

<script>
import axios from "axios";
import sha256 from "js-sha256";
export default {
  name: "GetLink",
  methods: {
    async getLink() {
      let appID = "17350600050";
      let timestamp = Math.floor(+new Date() / 1000);
      let secret = "K3NK2CEFQCQX4VV33UNACMNOXFQWOTK4";
      var payload =
        '{"query":"{mutation{ generateShortLink( input:{ originUrl: "https://shopee.vn/Apple-Iphone-11-128GB-Local-Set-i.52377417.6309028319" } ) { shortLink }}}" }';

      let factor = appID + timestamp + payload + secret;

      let signature = sha256(factor);

      const res = await axios.post(
        "https://open-api.affiliate.shopee.vn/graphql",
        {
          query: `mutation{ generateShortLink( input:{ originUrl: "https://shopee.vn/Apple-Iphone-11-128GB-Local-Set-i.52377417.6309028319" } ) { shortLink }}`,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*",
            Authorization:
              "SHA256 Credential=" +
              appID +
              ",Timestamp=" +
              timestamp +
              ",Signature=" +
              signature,
          },
        }
      );
      console.log("res: " + res);
    },
  },
};
</script>

<style>
</style>
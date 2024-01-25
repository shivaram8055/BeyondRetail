const fetch = require("node-fetch");

const query = "Order two shirts";
const apiKey = "7ZHSSAWZEMCVKKLYYP54QTHXNFISFD2K";

fetch(`https://api.wit.ai/message?q=${encodeURIComponent(query)}`, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Handle the response from Wit.ai
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

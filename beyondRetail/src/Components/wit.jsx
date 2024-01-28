import React, { useEffect, useState } from "react";
import ProductInfo from "./BackendComponents/ProductInfo";

const apiKey = "CEA5Y6CHOOCALA5KC6TPIS7TGYQZARNM"; // Replace with your Wit.ai API key

const WitAiComponent = ({ query }) => {
  const [intentName, setIntentName] = useState('');
  const [entityBodies, setEntityBodies] = useState('');

  const handleFetch = async () => {
    try {
      const response = await fetch(`https://api.wit.ai/message?q=${encodeURIComponent(query)}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        // Extract intent name
        const newIntentName = data.intents[0]?.name || null;
        setIntentName(newIntentName);

        // Extract entity bodies
        const newEntityBodies = data.entities["product_name:product_name"]?.map(entity => entity.value) || [];
        setEntityBodies(newEntityBodies);

        // Handle the response from Wit.ai
        console.log(data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    // Call the handleFetch function when the component mounts or when query changes
    handleFetch();
  }, [query]); // Add query as a dependency if it's used in the handleFetch function

  return (
    <ProductInfo intent={intentName} productName={entityBodies}/>
  );
};

export default WitAiComponent;

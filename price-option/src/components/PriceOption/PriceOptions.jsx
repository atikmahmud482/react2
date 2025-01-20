import React from "react";
import PriceOption from "../priceOptionn/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 20,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker facilities",
        "1-hour daily access",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 40,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker facilities",
        "Unlimited daily access",
        "2 group classes per week",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 60,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker facilities",
        "Unlimited daily access",
        "Unlimited group classes",
        "1 personal training session per month",
      ],
    },
    {
      id: 4,
      name: "VIP Plan",
      price: 100,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Private locker",
        "Unlimited access 24/7",
        "Unlimited group classes",
        "Weekly personal training sessions",
        "Access to sauna and spa",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">best prices in the town</h2>
      {priceOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;

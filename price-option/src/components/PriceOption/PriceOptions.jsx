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
  ];

  return (
    <div className="m-12 mb-3">
      <h2 className="text-5xl">best prices in the town</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;

// now add pie chart
// hjdfdf

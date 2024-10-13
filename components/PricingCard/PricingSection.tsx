import Card from "../Card/Card.tsx";
import PricingCard from "./PricingCard.tsx";

type PricingOption = {
  title: string;
  price: string;
  features: string[];
  link: string;
};

export default function PricingSection() {
  const pricingOptions: PricingOption[] = [
    {
      title: "Per Hour",
      price: "$50/hour",
      features: [
        "Flexible work hours",
        "Tailored project assistance",
        "Minimum 2 hours",
      ],
      link: "#",
    },
    {
      title: "Full Time",
      price: "$4000/month",
      features: [
        "Dedicated resource",
        "40 hours per week",
        "Long-term collaboration",
      ],
      link: "#",
    },
    {
      title: "Project Based",
      price: "Starting at $1500/project",
      features: [
        "One-time project",
        "Detailed project review",
        "End-to-end development",
      ],
      link: "#",
    },
  ];

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-2xl sm:text-3xl mb-7 dark:text-white text-center font-semibold">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} option={option} />
          ))}
        </div>
      </div>
    </Card>
  );
}

import { FaCheckCircle } from "react-icons/fa";

type PricingOption = {
  title: string;
  price: string;
  features: string[];
  link: string;
};

type PricingCardProps = {
  option: PricingOption;
};

export default function PricingCard({ option }: PricingCardProps) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="bg-myBgLight dark:bg-myBgDark p-6">
        <h3 className="text-lg sm:text-2xl font-semibold text-center mb-4 dark:text-white">
          {option.title}
        </h3>
        <p className="text-center text-lg sm:text-3xl font-bold text-black dark:text-white">
          {option.price}
        </p>
      </div>
      <div className="p-6">
        <ul className="space-y-2 mb-6">
          {option.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-gray-700 dark:text-gray-300"
            >
              <FaCheckCircle className="text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="text-center">
          <a
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            // className="px-4 py-2 bg-success text-black rounded-lg hover:bg-green-600 transition-colors"
            className="py-3 px-6 xl:px-[13px] bg-transparent hover:bg-myBgLight dark:hover:bg-myBgDarkTwo dark:hover:text-white transition-all duration-300 border border-myBorder dark:border-myBgDarkTwo text-myBgDarkTwo dark:text-myRgbaLight rounded-lg"
          >
            Select Plan
          </a>
        </div>
      </div>
    </div>
  );
}

import Card from "@/components/Card/Card.tsx";
import ScrollCard from "@/components/ScrollCard/ScrollCard.tsx";

export default function HomePage() {
  return (
    <>
      <div className="flex items-start space-x-3">
        {/* 1st side */}

        <div className="xl:w-1/2">
          {/* card 1 */}
          <Card>
            {/* card body  */}
            <div className="overflow-hidden p-6">
              <h3 className="text-2xl font-semibold leading-[1.333em] mb-2 ">
                Work Experience
              </h3>
              <ScrollCard />
            </div>
          </Card>
          {/* card 2 */}
          <div className="border-none bg-white dark:bg-black card_shadow rounded-2xl h-full mt-6">
            {/* card body  */}
            <div className="overflow-hidden p-6">hello2</div>
          </div>
        </div>
        {/* second site */}
        <div className="xl:w-1/2">bye</div>
      </div>
    </>
  );
}

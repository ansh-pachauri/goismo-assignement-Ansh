import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function MainContent() {
  const cards = [
    {
      heading: "1. Certification",
      paragraph: "Upload qualification information",
      buttonText: "GO",
    },
    {
      heading: "2. Upload a product",
      paragraph: "Fill in product information",
      buttonText: "GO",
    },
    {
      heading: "3. Open for sale",
      paragraph: "Choose to open any sales channel",
      buttonText: "GO",
    },
  ];

  
  const colors = [
    "bg-gradient-to-r from-pink-400 to-pink-600",
    "bg-gradient-to-r from-blue-400 to-blue-600",
    "bg-gradient-to-r from-purple-400 to-purple-600",
  ];

  return (
    <div className="">
      <main className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white rounded-2xl p-6 shadow-sm w-full">
        
      
        <div className="mb-6 lg:mb-0 lg:mr-8">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Well begun is half done
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Complete the following steps to sell
          </p>
        </div>

        {/* cards */}
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`${colors[index % colors.length]} text-white border-0 flex-1 min-w-[300px]`}
            >
              <CardContent className="p-4 flex items-center justify-between h-full">
                <div>
                  <h2 className="font-semibold text-sm md:text-base mb-1">
                    {card.heading}
                  </h2>
                  <p className="text-xs md:text-sm opacity-90 mb-3">
                    {card.paragraph}
                  </p>
                </div>
                <Button
                  size="sm"
                  className="bg-white text-gray-800 hover:bg-gray-100 self-start px-3 py-1 text-xs md:text-sm"
                >
                  {card.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

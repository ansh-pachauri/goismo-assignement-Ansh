import { Video, ShoppingBag, Share2, Tag, Hammer, Megaphone, Gift, PiggyBank } from "lucide-react";
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export default function OperationAssistence() {
    
    const cards = [
        {
            heading: "Small telecast live",
            p: "Live sales in WeChat",
            icon: Video,
            iconBg: "bg-pink-100",
            iconColor: "text-pink-600"
        },
        {
            heading: "Mini Program Store",
            p: "WeChat Mini Program Store",
            icon: ShoppingBag,
            iconBg: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            heading: "Distribution market",
            p: "One-click promotion",
            icon: Share2,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            heading: "Coupon",
            p: "Store marketing essentials",
            icon: Tag,
            iconBg: "bg-red-100",
            iconColor: "text-red-600"
        },
        {
            heading: "Store construction",
            p: "Can be customized",
            icon: Hammer,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            heading: "Promoting ads",
            p: "WeChat billion-level exposure",
            icon: Megaphone,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-600"
        },
        {
            heading: "Promotion rebate",
            p: "Help you sell goods",
            icon: Gift,
            iconBg: "bg-pink-100",
            iconColor: "text-pink-600"
        },
        {
            heading: "Asset Management",
            p: "Income and withdrawal",
            icon: PiggyBank,
            iconBg: "bg-green-100",
            iconColor: "text-green-600"
        }
    ]

    return(
        <div className="mt-8">
           
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Operations Assistant</h2>
                <Button variant="ghost" className="text-pink-500 hover:text-pink-600 hover:bg-pink-50 text-sm">
                    More
                </Button>
            </div>

            {/* cards */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4">
                {cards.map((card, index) => {
                    const IconComponent = card.icon;
                    return (
                        <Card
                            key={index}
                            className="hover:shadow-lg transition-all duration-200 cursor-pointer border-gray-100 hover:border-gray-200 bg-white"
                        >
                            <CardContent className="p-4 sm:p-5">
                                <div className="flex items-start gap-3">
                                    
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${card.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                                        <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 ${card.iconColor}`} />
                                    </div>
                                    
                                   
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base leading-tight">
                                            {card.heading}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                                            {card.p}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    )
}
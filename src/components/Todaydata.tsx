import { ChartLineDots } from "./LineChart";
import OperationAssistence from "./OperationAssistence";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Clock,
  Eye,
  TrendingUp,
  BarChart3,
  Package
} from "lucide-react";

export default function Todaydata() {
    const cards = [
        {
            p1: "Payment amount",
            p2: "8,992",
            p3: "Yesterday 8638",
            bgColor: "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
            iconBg: "bg-pink-500",
            icon: DollarSign
        },
        {
            p1: "Payment order", 
            p2: "793",
            p3: "Yesterday 753",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
            iconBg: "bg-blue-500",
            icon: ShoppingCart
        },
        {
            p1: "Paying customer",
            p2: "280", 
            p3: "Yesterday 320",
            bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
            iconBg: "bg-purple-500",
            icon: Users
        },
        {
            p1: "Pending orders",
            p2: "480",
            p3: "Yesterday 470", 
            bgColor: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
            iconBg: "bg-green-500",
            icon: Clock
        },
        {
            p1: "Live stream viewers",
            p2: "23,466",
            p3: "Yesterday 22089",
            bgColor: "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200",
            iconBg: "bg-gray-500",
            icon: Eye
        },
        {
            p1: "New attention",
            p2: "4,890",
            p3: "Yesterday 3890",
            bgColor: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
            iconBg: "bg-orange-500", 
            icon: TrendingUp
        },
        {
            p1: "Cumulative attention",
            p2: "135,743",
            p3: "Yesterday 130493",
            bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200",
            iconBg: "bg-indigo-500",
            icon: BarChart3
        },
        {
            p1: "Number of orders",
            p2: "5,249",
            p3: "Yesterday 4689",
            bgColor: "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200",
            iconBg: "bg-teal-500",
            icon: Package
        }
    ];

    return (
        <>

        <div className="mb-3.5 bg-white rounded-2xl w-full p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Today's data</h2>
                <Button variant="ghost" className="text-pink-500 hover:text-pink-600 hover:bg-pink-50">
                    More
                </Button>
            </div>

            {/* Cards  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cards.map((card, index) => {
                    const IconComponent = card.icon;
                    return (
                        <Card
                            key={index}
                            className={`${card.bgColor} border shadow-sm hover:shadow-md transition-shadow duration-200`}
                        >
                            <CardContent className="p-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-600 mb-2 font-medium">
                                            {card.p1}
                                        </p>
                                        <p className="text-2xl font-bold text-gray-900 mb-1">
                                            {card.p2}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {card.p3}
                                        </p>
                                    </div>
                                    <div className={`${card.iconBg} rounded-full p-3 ml-3`}>
                                        <IconComponent className="h-5 w-5 text-white" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        <OperationAssistence />
        <ChartLineDots />
        </div>
        </>

        
    );
}
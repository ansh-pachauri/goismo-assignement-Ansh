import { Home, Radio, ShoppingBag, Package, ShoppingCart, BarChart3, Coins, Smartphone, Settings, ChevronDown } from 'lucide-react';

export default function Sidebar() {
    return (
        <div>
            <aside className=" w-52 bg-purple-50 min-h-screen">
          <nav className="p-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3 px-3 py-2 text-pink-600 bg-pink-50 rounded-lg">
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Radio className="w-5 h-5" />
                <span>Live</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <ShoppingBag className="w-5 h-5" />
                <span>Shop</span>
                <ChevronDown className="w-4 h-4 ml-auto" />
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Package className="w-5 h-5" />
                <span>Commodity</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <ShoppingCart className="w-5 h-5" />
                <span>Order</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <BarChart3 className="w-5 h-5" />
                <span>Data</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Coins className="w-5 h-5" />
                <span>Assets</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Smartphone className="w-5 h-5" />
                <span>Application</span>
                <ChevronDown className="w-4 h-4 ml-auto" />
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Settings className="w-5 h-5" />
                <span>Set up</span>
              </div>
            </div>
          </nav>
        </aside>
        </div>
    )
}
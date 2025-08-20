import { Bell, ChevronDown, HelpCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

export default function Header() {
  return (
    <header className="bg-purple-50 sticky top-0 inset-x-0 z-40 rounded-2xl">
      <div className="w-full  px-4 py-3 flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 bg-red-500 rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-white transform rotate-45"></div>
          </div>
          <span className="font-medium text-gray-900 text-sm sm:text-base">xiaodianpu</span>
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-gray-700 text-sm sm:text-base">Aoki's Shop</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
            <Badge variant="secondary" className="text-pink-700 bg-pink-100 text-xs">Basic</Badge>
          </div>
        </div>
        
        {/* Right */}
        <div className="flex items-center gap-2">
          {/* help & notice */}
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-gray-500 flex items-center gap-1">
              <Bell className="w-4 h-4" />
              <span className="hidden md:inline">Help Center</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500 flex items-center gap-1">
              <HelpCircle className="w-4 h-4" />
              <span className="hidden md:inline">Notice</span>
            </Button>
          </div>

          {/* Avatar  */}
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8 rounded-full overflow-hidden">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <ChevronDown className="hidden sm:block w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  )
}

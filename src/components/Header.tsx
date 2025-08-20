import { Bell, ChevronDown, HelpCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

export default function Header() {
  return (
    <header className="bg-purple-50 sticky top-0 z-10">
      <div className="ml-2 w-full flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        {/* logo */}
        <div className='flex items-center justify-center gap-5'>
        <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 bg-red-500 rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-white transform rotate-45"></div>
              </div>
              <span className="font-medium text-gray-900">xiaodianpu</span>
            </div>
        
        {/* Akoi shpo */}

        <div className="flex items-center gap-2 min-w-0">
            <span className="text-gray-700 ">
                Aoki's Shop
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
            <Badge variant="secondary" className="text-pink-700 bg-pink-100 text-xs">
                Basic
            </Badge>
        </div>
        </div>
        
        {/* help and notice */}
        <div className='flex items-center justify-center gap-2 mr-3'>

        <div className="flex items-center gap-2 min-w-0">
            <Button variant="ghost" className="text-gray-500">
                <Bell className="w-4 h-4" />
                Help Center
            </Button>
            <Button variant="ghost" className="text-gray-500">
                <HelpCircle
                className="w-4 h-4"
                />
                Notice
            </Button>
        </div>

        {/* Avatar */}
        <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8 rounded-full overflow-hidden">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
        </div>
      </div>
    </header>
  )
}

import Header from "./components/Header"

import { MainContent } from "./components/MainContent"

import Sidebar from "./components/Sidebar"
import Todaydata from "./components/Todaydata"

function App() {
  

  return (
    <>
      <Header />
      <div className="flex flex-1 min-h-screen">
        <Sidebar />
        <div className="w-full">
          <div className="w-full max-w-[1200px] mr-auto pl-2 pr-4 py-4 flex flex-col gap-4">
            <MainContent />
            <Todaydata />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

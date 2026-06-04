import { Outlet, Link, useLocation } from "react-router";
import { Ticker } from "./components/Ticker";
import { Video, ShoppingCart, MessageSquare, AlertTriangle } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { name: "LIVE DESK", path: "/", icon: Video },
    { name: "THE VAULT", path: "/vault", icon: Video },
    { name: "SUPPLY CLOSET", path: "/shop", icon: ShoppingCart },
    { name: "TOWN HALL", path: "/townhall", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-['Oswald',sans-serif]">
      {/* Header */}
      <header className="bg-black border-b-4 border-[#FF0000] sticky top-0 z-50">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 md:py-0">
          <Link to="/" className="flex items-center gap-2 py-4">
            <div className="bg-[#FF0000] text-white px-3 py-1 text-3xl font-bold tracking-tighter">
              HNN
            </div>
            <div className="flex flex-col uppercase leading-none">
              <span className="text-xl font-bold">Hood News</span>
              <span className="text-[#FFCC00] text-sm tracking-widest font-bold">Network</span>
            </div>
          </Link>
          
          <nav className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-3 text-sm md:text-base font-bold uppercase transition-colors whitespace-nowrap ${
                    active 
                      ? "bg-[#FF0000] text-white" 
                      : "text-gray-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                  {item.name}
                </Link>
              );
            })}
            <Link 
              to="/tip"
              className="flex items-center gap-2 px-4 py-3 text-sm md:text-base font-bold uppercase bg-[#FFCC00] text-black hover:bg-yellow-400 transition-colors ml-2 whitespace-nowrap shadow-[0_0_15px_rgba(255,204,0,0.4)]"
            >
              <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />
              DROP A TIP
            </Link>
          </nav>
        </div>
        <Ticker />
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-140px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-zinc-800 py-12 px-6 text-center">
        <div className="text-3xl font-black text-zinc-700 tracking-tighter mb-4">HNN</div>
        <p className="text-zinc-500 font-sans text-sm uppercase tracking-widest">
          CABLE NEWS FOR THE CULTURE. UNFILTERED. UNCENSORED.
        </p>
        <p className="text-zinc-600 font-sans text-xs mt-4">
          © {new Date().getFullYear()} Hood News Network. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

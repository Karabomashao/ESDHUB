import TopNav from "./TopNav";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  ClipboardCheck,
  GraduationCap,
  DollarSign,
  Users,
  Sparkles,
  BarChart3,
  Shield,
  Settings,
  ChevronLeft,
  ChevronRight,
  Bell
} from "lucide-react";


export default function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { to: "/", label: "Dashboard", icon: LayoutDashboard },
    { to: "/diagnosticRoadmap", label: "Diagnostic & Roadmap", icon: ClipboardCheck },
    { to: "/learningHub", label: "Learning Hub", icon: GraduationCap, badge: "3" },
    { to: "/funding", label: "Funding", icon: DollarSign },
    { to: "/coaching", label: "Coaching", icon: Users },
    { to: "/coachLebo", label: "AI Coach Lebo", icon: Sparkles },
    { to: "/reporting", label: "Reporting", icon: BarChart3 },
    { to: "/compliance", label: "B-BBEE & Compliance", icon: Shield },
    { to: "/settings", label: "Settings", icon: Settings },
  ];

  const linkElements = navItems.map(link => {
    const Icon = link.icon;
    return (
      <NavLink
        to={link.to}
        key={link.to}
        className={({ isActive }) =>
          `flex items-center p-3 text-gray-700 hover:bg-gray-100 transition-colors ${
            isActive ? 'bg-blue-600 text-white rounded-lg mx-2' : ''
          }`
        }
      >
        <Icon className="w-5 h-5 shrink-0" />
        {!isCollapsed && (
          <>
            <span className="ml-3 text-sm font-medium whitespace-nowrap">{link.label}</span>
            {link.badge && (
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {link.badge}
              </span>
            )}
          </>
        )}
      </NavLink>
    );
  })

  return (
    <div className="flex flex-col h-screen">
        <TopNav/>
        <div className="flex flex-1 overflow-hidden">
            <div className={
                `${isCollapsed ? "w-20" : "w-64"} bg-white border-r border-gray-200
                flex flex-col transition-all duration-300 z-30 
                shadow-[4px_0_24px_-12px_rgb(0,0,0,0.1)]`
                }
            >
                <div className="flex-1 overflow-y-auto">
                {linkElements}
                </div>
                <div className="border-t border-gray-100 p-3 flex justify-center">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors whitespace-nowrap"
                >
                    <ChevronLeft className="w-4 h-4" />
                    {!isCollapsed && <span className="text-xs font-medium">Collapse</span>}
                </button>
                </div>
            </div>
            <div className="flex-1 overflow-hidden">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

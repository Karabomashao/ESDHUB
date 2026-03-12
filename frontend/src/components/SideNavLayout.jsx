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

  const linkElements = navItems.map(link => (
    <NavLink
        to={link.to}
        key={link.to}
    >
        <div className="flex-1 p-3 space-y-1 overflow-y-auto scrollbar-thin">
            {link.label}
        </div>
        
    </NavLink>
  ))

  return (
    <div className="flex h-full w-full">
        <div className={
            `${isCollapsed ? "w-20" : "w-64"} bg-white border-r border-gray-200
            h-full flex flex-col transition-all duration-300 z-30 
            shadow-[4px_0_24px_-12px_rgb(0,0,0,0.1)]`
            }
        >
            <div className={
                `h-16 flex items-center ${isCollapsed ? "justify-center" : "px-6"}
                border-b border-gray-100 transition-all duration-300`
                }
            >
                <div className={"w-8 h-8 bg-[#312E81] rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm shrink-0"}>
                    DP
                </div>
                {!isCollapsed && (
                    <span className="ml-3 text-gray-900 font-semibold text-sm tracking-wide whitespace-nowrap overflow-hidden">
                        World ESD Hub
                    </span>
                )}
            </div>
            {linkElements}
        </div>
        <div className="flex-1 overflow-hidden">
            <Outlet/>
        </div>
    </div>
  )
}

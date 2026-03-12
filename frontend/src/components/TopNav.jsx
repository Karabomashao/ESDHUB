export default function TopNav(){
    return(
        <>
            <div className="border-b bg-card sticky top-0 z-40">
                <div className="flex items-center justify-between px-4 lg:px-6 h-16">
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground uppercase tracking-wider">
                            Menu
                            </span>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary-foreground">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                                <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>
                        <span className="hidden sm:inline">DP World ESD Hub</span>
                    </div>        

                    <div className="flex items-center gap-2">
                        
                    </div>
                </div>
            </div>
        </>

    )
}






// import { Bell, ChevronDown, Menu } from "lucide-react";
// import { Button } from "./ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import { Badge } from "./ui/badge";
// import { Avatar, AvatarFallback } from "./ui/avatar";

// export function TopNav({ userName, userRole, onRoleSwitch, onMenuClick }) {
//   return (
//     <div className="border-b bg-card sticky top-0 z-40">
//       <div className="flex items-center justify-between px-4 lg:px-6 h-16">
//         <div className="flex items-center gap-4">
//           <span className="text-sm text-muted-foreground uppercase tracking-wider">
//             Menu
//           </span>
//         </div>

//         <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3">
//           <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
//             <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary-foreground">
//               <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
//               <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
//             </svg>
//           </div>
//           <span className="hidden sm:inline">DP World ESD Hub</span>
//         </div>

//         <div className="flex items-center gap-2">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="sm" className="gap-2">
//                 <Badge variant="secondary">{userRole}</Badge>
//                 <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>

//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>Switch Role</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem onClick={() => onRoleSwitch?.("SME")}>SME</DropdownMenuItem>
//               <DropdownMenuItem onClick={() => onRoleSwitch?.("Admin")}>Admin</DropdownMenuItem>
//               <DropdownMenuItem onClick={() => onRoleSwitch?.("Fund Manager")}>
//                 Fund Manager
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => onRoleSwitch?.("Coach")}>Coach</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <Button variant="ghost" size="icon" className="relative">
//             <Bell className="h-5 w-5" />
//             <span className="absolute top-1 right-1 h-2 w-2 bg-danger-color rounded-full" />
//           </Button>

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="gap-2">
//                 <Avatar className="h-8 w-8">
//                   <AvatarFallback>
//                     {userName.slice(0, 2).toUpperCase()}
//                   </AvatarFallback>
//                 </Avatar>
//                 <span className="hidden sm:inline">{userName}</span>
//                 <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>

//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Profile</DropdownMenuItem>
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Log out</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </div>
//   );
// }
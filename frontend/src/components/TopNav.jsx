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

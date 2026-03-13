export default function SignUp(){

    function handleSubmit(){
        console.log("Something will go here later")
    }
    
     return (
        <div className="min-h-screen flex items-center justify-center bg-bg-alt p-4">
            <div className="w-full max-w-md">
                <div className="flex flex-col items-center mb-8">
                    <div className="h-16 w-16 rounded-xl bg-primary flex items-center justify-center mb-4">
                        <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-primary-foreground">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                            <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                    <h1 className="text-3xl mb-2">DP World ESD Hub</h1>
                    <p className="text-muted-foreground">Enterprise & Supplier Development Platform</p>
                </div>

                 <form onSubmit={handleSubmit} className="space-y-4">
                    <label>
                        
                    </label>
                </form>
            </div>
        </div>
    )
}
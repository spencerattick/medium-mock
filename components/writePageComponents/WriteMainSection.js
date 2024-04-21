export default function WriteMainSection() {
    return (
        <main className="flex flex-col justify-between p-5 mx-80">
            <input type="text" placeholder="Title" className="text-2xl font-bold w-full" />
            <div className="flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <input type="text" placeholder="Tell your story..." className="text-lg font-bold w-full" />
            </div>
        </main>
    )
}
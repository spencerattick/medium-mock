export default function WriteMainSection() {
    return (
        <main className="flex flex-col justify-between md:p-5 md:mx-40 lg:mx-80">
            <input type="text" placeholder="Title" className="text-4xl w-full font-light pb-4 pl-10" />
            <div className="flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-9 h-9 cursor-pointer text-gray-500 hover:rotate-45 duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <input type="text" placeholder="Tell your story..." className="text-xl w-full font-light pl-4" />
            </div>
        </main>
    )
}
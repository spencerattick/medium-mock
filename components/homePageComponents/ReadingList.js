'use client';

const handleClick = () => {
    console.log('Clicked');
}

export default function ReadingList() {
    return (
        <main className="pb-8 max-w-xs">
            <h2 className="font-medium">Reading List</h2>
            <p className="text-sm text-gray-500 cursor-pointer" onClick={() => handleClick()}>
                Click the <span className="inline-block align-middle"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block align-middle mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg></span> on any story to easily add it to your reading list or a custom list that you can share.
            </p>
        </main>
    )
}

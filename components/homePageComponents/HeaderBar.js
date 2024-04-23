import mediumLogo from '../../public/mediumLogo.png';
import Image from 'next/image';
import Link from 'next/link';


export default function HeaderBar( { profilePhoto } ) {
    const profilePhotoUrl = profilePhoto.url;
    
    return (
        <main className="p-4">
            <div className="flex justify-between items-center"> 
                <div className="flex items-center"> 
                    <Image src={mediumLogo} alt="Medium Logo" className="w-12 h-11 mr-2"/>
                    <div className="flex items-center space-x-2 md:pl-3 sm:pl-1 bg-gray-100 rounded-full p-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-400 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="text" placeholder="Search" className="ml-4 bg-transparent focus:outline-none hidden sm:block" /> 
                    </div>
                </div>
            <div className="flex items-center space-x-8">
                <Link  key="" href="/write" className="group flex items-center text-gray-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 group-hover:text-gray-900">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    <div className="ml-2 group-hover:text-gray-900 hidden sm:block">Write</div>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7 text-gray-500 hover:text-gray-900 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>

                <img src={profilePhotoUrl} alt="Profile" className="rounded-full w-9 h-9 cursor-pointer hover:brightness-50 transition duration-300 ease-in-out" />
            </div>
        </div>
    </main>
    );
  }
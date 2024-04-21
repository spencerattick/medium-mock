import mediumLogo from '../../public/mediumLogo.png';
import Image from 'next/image';
import Link from 'next/link';


async function getProfilePhoto() {
    let res = '';
    try {
      res = await fetch('https://picsum.photos/100')
    } catch (error) {
        console.error(error);
    }
    return res
}

export default async function WriteHeaderBar() {
    const profilePhoto = await getProfilePhoto();
    const profilePhotoUrl = profilePhoto.url;
    return (
        <main className="p-4 mx-60">
            <div className="flex justify-between items-center"> 
                <div className="flex items-center"> 
                    <Image src={mediumLogo} alt="Medium Logo" className="w-12 h-11 mr-2" />
                </div>
            <div className="flex items-center space-x-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7 text-gray-500 hover:text-gray-900 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>

                <img src={profilePhotoUrl} alt="Profile" className="rounded-full w-9 h-9 cursor-pointer hover:brightness-50 transition duration-300 ease-in-out" />
            </div>
        </div>
    </main>
    );
  }
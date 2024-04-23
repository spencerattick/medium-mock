import Image from "next/image";

async function getBlogImage(maxRetries = 20) {
  let response;
  for (let i = 0; i < maxRetries; i++) {
      const randomInt = Math.floor(Math.random() * 1000);
      try {
          response = await fetch(`https://picsum.photos/id/${randomInt}/200`);
          if (response.status === 200) {
              return response;
          } else {
              console.log('Failed to fetch: ', randomInt)
          }
      } catch (error) {
          console.error(error);
      }
  }
  console.error(`Failed to fetch image after ${maxRetries} retries`);
  return null; 
}

export default async function BlogPreview({ blog }) {
  const blogImage = await getBlogImage();

  return (
      <main className="flex-1 p-4 flex items-center border-b">
          <div className="flex flex-col flex-1">
              <div className="flex items-center space-x-2 text-s"> 
                  <img src={blog.authorImageUrl} alt="Author Profile" className="w-5 h-5 rounded-full" />
                  <span className="text-gray-500 text-sm cursor-pointer">{blog.userName}</span>
                  <span className="text-gray-500">&middot;</span>
                  <span className="text-gray-500 text-sm">{blog.dateOfPublication}</span>
              </div>
              <h1 className="font-bold text-2xl">{blog.title}</h1>
              <p className="pb-6 text-gray-600">{blog.description}</p>
              <div className="flex items-center space-x-2 text-xs"> 
                  <span className="bg-gray-100 rounded-2xl p-2.5 cursor-pointer">{blog.topTag}</span>
                  <span className="pr-48">{blog.length}</span>
                  <div className="ml-auto flex items-center space-x-2">
            <div className="relative flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
                <div className="ttooltip-text absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md shadow-md opacity-0 pointer-events-none z-10 group-hover:opacity-100">
                    <span>Save</span>
                </div>
            </div>
            <div className="relative flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div className="ttooltip-text absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md shadow-md opacity-0 pointer-events-none z-10 group-hover:opacity-100">
                    <span>Show less like this</span>
                </div>
            </div>
            <div className="relative flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <div className="ttooltip-text absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md shadow-md opacity-0 pointer-events-none z-10 group-hover:opacity-100">
                    <span>More</span>
                </div>
            </div>
            </div>
              </div>
          </div>
          {blogImage && (
              <div className="ml-4 hidden sm:block">
                  <Image width={200} height={200} loading="lazy" src={blogImage.url} alt="Blog Image" className="sm:w-14 md:h-14 md:w-28 lg:h-28 ml-8" /> 
              </div>
          )}
      </main>
  );
}

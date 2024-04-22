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
  return null; // Return null if max retries reached without success
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
                  {/* More content */}
              </div>
          </div>
          {blogImage && (
              <div className="ml-4 hidden sm:block">
                  <Image width={200} height={200} loading="lazy" src={blogImage.url} alt="Blog Image" className="w-28 h-28 ml-8" /> 
              </div>
          )}
      </main>
  );
}

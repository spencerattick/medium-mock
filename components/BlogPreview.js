async function getBlogImage() {
    const randomInt = Math.floor(Math.random() * 1000);
    let res = '';
    try {
      res = await fetch(`https://picsum.photos/id/${randomInt}/200`)

    } catch (error) {
        console.error(error);
    }
    return res
  }

  async function getAuthorProfileImage() {
    const randomInt = Math.floor(Math.random() * 1000);
    let res = '';
    try {
      res = await fetch(`https://picsum.photos/id/${randomInt}/100`)

    } catch (error) {
        console.error(error);
    }
    return res
  }


  export default async function BlogPreview({ blog }) {
    const blogImage = await getBlogImage();
    const blogImageUrl = blogImage.url;

    const authorData = await getAuthorProfileImage();
    const authorImageUrl = authorData.url;
    return (
        <main className="flex-1 p-4 flex items-center border-b">
        <div className="flex flex-col flex-1">
          <div className="flex items-center space-x-2 text-s"> 
            <img src={authorImageUrl} alt="Author Profile" className="w-5 h-5 rounded-full" />
            <span className="text-gray-500 text-sm">{blog.userName}</span>
            <span className="text-gray-500">&middot;</span>
            <span className="text-gray-500">{blog.dataOfPublication}</span>
          </div>
          <h1 className="font-bold text-2xl">{blog.title}</h1>
          <p>{blog.description}</p>
          <div className="flex items-center space-x-2 text-xs"> 
            <span className="bg-gray-100 rounded-2xl p-2">{blog.topTag}</span>
            <span>{blog.length}</span>
            <div className="ml-auto flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="ml-4">
          <img src={blogImageUrl} alt="Blog Image" className="w-28 h-28 ml-8" /> 
        </div>
      </main>
    );
}




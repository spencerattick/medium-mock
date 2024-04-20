async function getBlogImage() {
    let res = '';
    try {
      res = await fetch('https://picsum.photos/200')

    } catch (error) {
        console.error(error);
    }
   
    return res
  }

 
  export default async function BlogPreview({ blog }) {
    const data = await getBlogImage();
    const imageUrl = data.url;
    return (
        <main className="border border-green-300 flex-1 p-4 flex items-center">
            <div className="flex flex-col flex-1">
                <div className="text-gray-500">{blog.userName}  &middot; {blog.dataOfPublication}</div>
                <h1 className="font-bold">{blog.title}</h1>
                <p>{blog.description}</p>
            </div>
            <div className="ml-4">
                <img src={imageUrl} alt="Blog Image" className="w-24 h-24" /> 
            </div>
        </main>
    );
}




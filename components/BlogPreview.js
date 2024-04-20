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
        <main className="border border-green-300 flex-1 p-4">
            <h1 className="font-bold">{blog.title}</h1>
            <img src={imageUrl} alt="Blog Image" />
            <p>{blog.description}</p>
        </main>
    );
}

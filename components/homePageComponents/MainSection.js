import BlogPreview from "./BlogPreview";
import blogData from "../../public/mockData/blogPreviewData.json";

async function getAuthorProfileImage() {
    for (let i = 0; i < blogData.length; i++) {
        const randomInt = Math.floor(Math.random() * 1000);
        try {
            const response = await fetch(`https://picsum.photos/id/${randomInt}/100`);
            try {
                const imageExists = await fetch(response.url);
                if (imageExists.status === 200) {
                    blogData[i].authorImageUrl = response.url;
                } else {
                    console.log('RETRYING')
                    i--;
                }
            } catch (error) {
                console.error(error);
            }
        } catch (error) {
            console.error(`Error fetching image for blog ${i}:`, error);
        }
    }
}



export default async function MainSection() {
    await getAuthorProfileImage();

    return (
        <main className="flex-1 p-4 md:ml-20 lg:ml-40 mr-16">
            {
                blogData.map((blog, index) => (
                    <BlogPreview key={index} blog={blog} />
                ))
            }
        </main>
    )
}

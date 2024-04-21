import BlogPreview from "./BlogPreview";
import blogData from "../../public/mockData/blogPreviewData.json";

//add image to user here so that users have the same image each time they appear on the page
async function getAuthorProfileImage() {
    for (let i = 0; i < blogData.length; i++) {
        const randomInt = Math.floor(Math.random() * 1000);
        let res = '';
        try {
            res = await fetch(`https://picsum.photos/id/${randomInt}/100`)
            blogData[i].authorImageUrl = res.url;
        } catch (error) {
            console.error(error);
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

import BlogPreview from "./BlogPreview";
import blogData from "../public/mockData/blogPreviewData.json";

export default function MainSection({ imageUrl }) {
    return (
        <main className="flex-1 p-4 ml-40 mr-16">
            {
                blogData.map((blog, index) => (
                    <BlogPreview key={index} blog={blog} />
                ))
            }
        </main>
    )
}
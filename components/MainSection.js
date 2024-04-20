import BlogPreview from "./BlogPreview";
import blogData from "../public/mockData/blogPreviewData.json";

export default function MainSection() {
    return (
        <main className="border border-green-300 flex-1 p-4">
            <h2>MainSection</h2>
            {
                blogData.map((i) => {
                    return <BlogPreview key={i} />
                })
            }
        </main>
    )
}
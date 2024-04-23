import BlogPreview from "./BlogPreview";

export default function MainSection( { updatedBlogData } ) {
    return (
        <main className="flex-1 p-4 md:ml-20 lg:ml-40 mr-16">
            {
                updatedBlogData.map((blog, index) => (
                    <BlogPreview key={index} blog={blog} />
                ))
            }
        </main>
    )
}

import blogData from "../../public/mockData/blogPreviewData.json";
import Image from "next/image";

function getRandomStaffPicks() {
    const staffPicks = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * blogData.length);
        staffPicks.push(blogData[randomIndex]);
    }
    return staffPicks;
}

export default function StaffPicks() {
    const staffPicks = getRandomStaffPicks();
    return (
        <main className="pb-8 max-w-xs">
            <h2 className="font-medium">Staff Picks</h2>
            {staffPicks.map((blog, index) => (
                <div key={index}>
                    <div className="flex items-center space-x-2 mt-4">
                        <Image
                            src={blog.authorImageUrl}
                            alt="Author Profile"
                            className="w-5 h-5 rounded-full"
                            width={25}
                            height={25}
                            loading="lazy"
                        />
                        <span className="text-xs text-gray-500">{blog.userName}</span>
                    </div>
                    <h3 className="text-md font-bold mt-2">{blog.title}</h3>
                </div>
            ))}
            <a href="#" className="text-green-600 text-xs">See the full list</a>
        </main>
    );
}

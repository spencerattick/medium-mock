import blogData from "../public/mockData/blogPreviewData.json";

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


function getRandomStaffPicks() {
    const staffPicks = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * blogData.length);
        staffPicks.push(blogData[randomIndex]);
    }
    return staffPicks;
}

export default async function StaffPicks() {
    const staffPicks = getRandomStaffPicks();
    const authorData = await getAuthorProfileImage();
    const authorImageUrl = authorData.url;
    return (
        <main className="pb-8">
            <h2 className="font-medium">Staff Picks</h2>
            {staffPicks.map((blog, index) => (
                <div>
                    <div key={index} className="flex items-center space-x-2 mt-4">
                    <img src={authorImageUrl} alt="Author Profile" className="w-5 h-5 rounded-full" />
                    <span className="text-xs text-gray-500">{blog.userName}</span>
                    </div>
                    <h3 className="text-md font-semibold mt-2">{blog.title}</h3>
                </div>
                   
                ))}
            <a href="" className="text-green-600 text-xs">See the full list</a>
        </main>
    )
}
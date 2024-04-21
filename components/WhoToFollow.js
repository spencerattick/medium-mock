import blogPreviewData from "../public/mockData/blogPreviewData.json";

function getThreeUsers() {
    const users = [];
    const userNames = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * blogPreviewData.length);
        if (!userNames.includes(blogPreviewData[randomIndex].userName)) {
            users.push(blogPreviewData[randomIndex]);
            userNames.push(blogPreviewData[randomIndex].userName);
        }
        else {
            i--;
        }
    }
    return users;
}

function truncateDescription(description, maxWords) {
    const words = description.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
}

export default function WhoToFollow() {
    const users = getThreeUsers();
    return (
        <main className="pb-8 max-w-72">
            <h2 className="font-medium">Who to follow</h2>
            {users.map((user) => {
                const truncatedDescription = truncateDescription(user.userDescription, 16); // Limit to 20 words
                return (
                    <div key={user.userName} className="flex flex-col mt-4 items-start">
                        <span className="text-md font-bold">{user.userName}</span>
                        <p className="text-xs text-gray-500">{truncatedDescription}</p>
                    </div>
                );
            })}
            <a href="" className="text-green-600 text-xs">See more suggestions</a>
        </main>
    );
}

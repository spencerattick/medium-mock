import topicsData from '../../public/mockData/topicsData';

function getRandomTopics() {
    const topics = [];
    for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * topicsData.length);
        topics.push(topicsData[randomIndex]);
    }
    return topics;
}

export default function RecommendedTopics() {
    const topics = getRandomTopics();

    return (
        <main className="pb-8 max-w-xs">
            <h2 className="font-medium">Recommended Topics</h2>
            {/* <div className="grid grid-cols-2 gap-x-1 gap-y-1 mt-1"> */}
            <div className="flex flex-wrap space-between">
                {topics.map((topic, index) => (
                    <div key={index} className="flex items-center">
                        <span className="text-sm bg-gray-100 rounded-full p-3.5 m-2 cursor-pointer">{topic}</span>
                    </div>
                ))}
            </div>
            <a href="" className="text-green-600 text-xs">See more topics</a>
        </main>
    );
}

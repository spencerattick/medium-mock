import topicsData from '../public/mockData/topicsData';

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
        <main className="pb-8">
            <h2 className="font-medium">Recommended Topics</h2>
            {topics.map((topic, index) => (
                <div key={index} className="flex flex-row flex-wrap space-x-2 mt-4">
                    <span className="text-xs bg-gray-100 rounded-full p-3">{topic}</span>
                </div>
            ))}
            <a href="" className="text-green-600 text-xs">See more topics</a>
        </main>
    )
}
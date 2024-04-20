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
                <div key={index} className="flex items-center space-x-2 mt-4">
                    <span className="text-xs text-gray-500">{topic}</span>
                </div>
            ))}
        </main>
    )
}
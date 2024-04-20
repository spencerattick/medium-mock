import StaffPicks from "./StaffPicks";
import RecommendedTopics from "./RecommendedTopics";

export default function RightSideBar() {
    return (
        <main className="border-l flex flex-col justify-between max-h-96 p-5 mr-28">
            <StaffPicks />
            <RecommendedTopics />
        </main>
    )
}
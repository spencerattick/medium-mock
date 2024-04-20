import StaffPicks from "./StaffPicks";
import RecommendedTopics from "./RecommendedTopics";
import ReadingList from "./ReadingList";
import WhoToFollow from "./WhoToFollow";
import AdditionalLinks from "./AdditionalLinks";

export default function RightSideBar() {
    return (
        <main className="border-l border border-red-400 flex flex-col justify-between max-h-96 p-5 mr-28">
            <StaffPicks />
            <RecommendedTopics />
            <WhoToFollow />
            <ReadingList />
            <AdditionalLinks />
        </main>
    )
}
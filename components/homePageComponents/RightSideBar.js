import StaffPicks from "./StaffPicks";
import RecommendedTopics from "./RecommendedTopics";
import ReadingList from "./ReadingList";
import WhoToFollow from "./WhoToFollow";
import AdditionalLinks from "./AdditionalLinks";

export default function RightSideBar() {
    return (
        <main className="hidden md:flex md:flex-col md:justify-between md:max-h-96 md:p-5 md:mr-20 lg:mr-40">
            <StaffPicks />
            <RecommendedTopics />
            <WhoToFollow />
            <ReadingList />
            <AdditionalLinks />
        </main>
    );
}

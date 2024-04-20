import HeaderBar from "../../components/HeaderBar";
import MainSection from "../../components/MainSection";
import RightSideBar from "../../components/RightSideBar";

export default function Home() {
  return (
    <main>
      <HeaderBar/>
      <div className="border-t flex">
        <MainSection />
        <RightSideBar />
      </div>
    </main>
  );
}

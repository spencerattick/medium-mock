import HeaderBar from "../../components/HeaderBar";
import MainSection from "../../components/MainSection";
import RightSideBar from "../../components/RightSideBar";

export default function Home() {
  return (
    <main>
      <HeaderBar/>
      <div className="border border-black flex">
        <MainSection />
        <RightSideBar />
      </div>
    </main>
  );
}

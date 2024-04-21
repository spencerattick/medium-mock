import HeaderBar from "../../components/homePageComponents/HeaderBar";
import MainSection from "../../components/homePageComponents/MainSection";
import RightSideBar from "../../components/homePageComponents/RightSideBar";

export default function Home() {
  return (
    <main>
      <HeaderBar/>
      <div className="border-t flex">
        <MainSection className="flex-1" />
        <RightSideBar />
      </div>
    </main>
  );
}

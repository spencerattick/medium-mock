import HeaderBar from "../../components/homePageComponents/HeaderBar";
import MainSection from "../../components/homePageComponents/MainSection";
import RightSideBar from "../../components/homePageComponents/RightSideBar";

import blogData from "../../public/mockData/blogPreviewData.json";

async function getAuthorProfileImage() {
  const data = [...blogData]; // Clone the blog data to avoid direct mutation
  for (let i = 0; i < data.length; i++) {
      const randomInt = Math.floor(Math.random() * 1000);
      try {
          const response = await fetch(`https://picsum.photos/id/${randomInt}/100`);
          if (response.ok) {
              data[i].authorImageUrl = response.url;
          } else {
              console.log('RETRYING');
              i--;
          }
      } catch (error) {
          console.error(`Error fetching image for blog ${i}:`, error);
      }
  }
  return data; // Return the modified data
}

export default async function Home() {
  const updatedBlogData = await getAuthorProfileImage();

  return (
    <main>
      <HeaderBar/>
      <div className="border-t flex">
        <MainSection className="flex-1" updatedBlogData={updatedBlogData} />
        <RightSideBar />
      </div>
    </main>
  );
}

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

async function getProfilePhoto() {
  let response = '';
  try {
    response = await fetch('https://picsum.photos/100');
  } catch (error) {
      console.error(error);
  }
  return response;
}

export default async function Home() {
  const updatedBlogData = await getAuthorProfileImage();
  const profilePhoto = await getProfilePhoto();

  return (
    <main>
      <HeaderBar profilePhoto={profilePhoto} />
      <div className="border-t flex">
        <MainSection className="flex-1" updatedBlogData={updatedBlogData} />
        <RightSideBar />
      </div>
    </main>
  );
}

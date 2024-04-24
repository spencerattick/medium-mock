import HeaderBar from "../../components/homePageComponents/HeaderBar";
import MainSection from "../../components/homePageComponents/MainSection";
import RightSideBar from "../../components/homePageComponents/RightSideBar";

import blogData from "../../public/mockData/blogPreviewData.json";

async function getBlogImage(maxRetries = 20) {
  let response;
  for (let i = 0; i < maxRetries; i++) {
      const randomInt = Math.floor(Math.random() * 1000);
      try {
          response = await fetch(`https://picsum.photos/id/${randomInt}/200`);
          if (response.status === 200) {
              return response.url;
          } else {
              console.log('Failed to fetch: ', randomInt)
          }
      } catch (error) {
          console.error(error);
      }
  }
  console.error(`Failed to fetch image after ${maxRetries} retries`);
  return null; 
}

async function getAuthorProfileImage() {
  const data = [...blogData]; 
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
          data[i].blogPostImage = await getBlogImage();
      } catch (error) {
          console.error(`Error fetching image for blog ${i}:`, error);
      }
  }
  return data; 
}

async function getProfilePhoto() {
  let photo = '';
  try {
    photo = await fetch('https://picsum.photos/100');
  } catch (error) {
      console.error(error);
  }
  return photo.url;
}


export default async function Home() {
  const updatedBlogData = await getAuthorProfileImage();
  const profilePhotoUrl = await getProfilePhoto();

  return (
    <main>
      <HeaderBar profilePhotoUrl={profilePhotoUrl} />
      <div className="border-t flex">
        <MainSection className="flex-1" updatedBlogData={updatedBlogData} />
        <RightSideBar />
      </div>
    </main>
  );
}

'use client';

import Image from "next/image";
import { analytics } from "../../lib/segment";
import { useState } from "react"; 

export default function BlogPreview({ blog }) {
  const [isSaved, setIsSaved] = useState(false); 

  const toggleSavedIcon = () => {
    setIsSaved(!isSaved); 
    if (!isSaved) {
      analytics.track("Blog Post Saved", {
        title: blog.title
      });
    } else {
      analytics.track("Blog Post Unsaved", {
        title: blog.title
      });
    }
  };

  const handleUserProfileClick = (userName) => {
      analytics.track("User Profile Clicked", {
        userName
      });
  }

  const handleBlogPostTitleClick = (title) => {
      analytics.track("Blog Post Title Clicked", {
        title
      });
  }

  return (
      <main className="flex-1 p-4 flex items-center border-b">
          <div className="flex flex-col flex-1">
              <div className="flex items-center space-x-2 text-s"> 
                  <img src={blog.authorImageUrl} alt="Author Profile" className="w-5 h-5 rounded-full" />
                  <span className="text-gray-500 text-sm cursor-pointer" onClick={() => handleUserProfileClick(blog.userName)}>{blog.userName}</span>
                  <span className="text-gray-500">&middot;</span>
                  <span className="text-gray-500 text-sm">{blog.dateOfPublication}</span>
              </div>
              <h1 className="font-bold text-2xl cursor-pointer" onClick={() => handleBlogPostTitleClick(blog.title)}>{blog.title}</h1>
              <p className="pb-6 text-gray-600">{blog.description}</p>
              <div className="flex items-center space-x-2 text-xs"> 
                  <span className="bg-gray-100 rounded-2xl p-2.5 cursor-pointer">{blog.topTag}</span>
                  <span className="pr-48">{blog.length}</span>
                  <div className="ml-auto flex items-center space-x-2">
            <div className="relative flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" fill={isSaved ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  className={`w-5 h-5 cursor-pointer`} onClick={toggleSavedIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
                <div className="ttooltip-text absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md shadow-md opacity-0 pointer-events-none z-10 group-hover:opacity-100" >
                    <span>Save</span>
                </div>
            </div>
            <div className="relative flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div className="ttooltip-text absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md shadow-md opacity-0 pointer-events-none z-10 group-hover:opacity-100">
                    <span>Show less like this</span>
                </div>
            </div>
            <div className="relative flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <div className="ttooltip-text absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md shadow-md opacity-0 pointer-events-none z-10 group-hover:opacity-100">
                    <span>More</span>
                </div>
            </div>
            </div>
              </div>
          </div>
          <div className="ml-4 hidden sm:block">
              <Image width={200} height={200} loading="lazy" src={blog.blogPostImage} alt="Blog Image" className="sm:w-14 md:h-14 md:w-28 lg:h-28 ml-8" /> 
          </div>
      </main>
  );
}

// src/UserContext.js

import React, { createContext, useState, useEffect } from 'react';
// Create context
export const UserContext = createContext();


// Provider component
export function UserProvider({ children }) {
  const [posts, setPosts] = useState([])
  


  useEffect(() => {
    const dummyPosts = [
      {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFVjYgnMbhRQiedQ7EKk35hfvSn8jqynJlQ&s",
        caption: "First post!",
        likes: 0,
        comments: ["Nice post!"]
      },
      {
        id: 2,
        image: "https://cdn.shopify.com/s/files/1/0671/0240/8918/files/Napoleon_Hill_4b165e10-58ff-4911-87a4-1d899dffb464_600x600.png?v=1737484902",
        caption: "Second post!",
        likes: 3,
        comments: [ "That's True!"]
      }
    ];
    setPosts(dummyPosts);
  }, []);


  return (
    <UserContext.Provider value={{ posts, setPosts }}>
      {children}
    </UserContext.Provider>
  );
}

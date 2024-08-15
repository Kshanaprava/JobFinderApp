import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookmarkContext = createContext();

export function useBookmark() {
  return useContext(BookmarkContext);
}

export function BookmarkProvider({ children }) {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = async () => {
    const storedBookmarks = await AsyncStorage.getItem('bookmarkedJobs');
    if (storedBookmarks) {
      setBookmarkedJobs(JSON.parse(storedBookmarks));
    }
  };

  const addBookmark = async (job) => {
    const newBookmarks = [...bookmarkedJobs, job];
    setBookmarkedJobs(newBookmarks);
    await AsyncStorage.setItem('bookmarkedJobs', JSON.stringify(newBookmarks));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedJobs, addBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

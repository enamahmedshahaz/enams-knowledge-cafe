import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead =(id, time) => {
    const currentReadingTime = readingTime + time;
    setReadingTime(currentReadingTime);

    //remove read blog items from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id );
    setBookmarks(remainingBookmarks);
  }

  return (
    <div>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

      </div>
    </div>
  )
}

export default App

import React , {useState} from 'react';
import './App.css';
import BookmarkForm from './BookmarkForm';
import BookmarkList from './BookmarkList';
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const addBookmark = (url) => {
    setBookmarks([...bookmarks, url]);
    setInputValue('');
  };
  const removeBookmark = (index) => {
    setBookmarks(bookmarks.filter((_, i) => i !== index));
  };
  const editBookmark = (index, newUrl) => {
    const updatedBookmarks = bookmarks.map((bookmark, i) => (i === index ? newUrl : bookmark));
    setBookmarks(updatedBookmarks);
  };
  const deleteAllBookmarks = () => {
    setBookmarks([]);
  };
  return (
    <div className="App">
       <h1>My BookMarks</h1><hr/>
       <BookmarkForm inputValue = {inputValue} setInputValue={setInputValue} addBookmark={addBookmark} 
       deleteAllBookmarks={deleteAllBookmarks} />
       <BookmarkList bookmarks={bookmarks} removeBookmark={removeBookmark} editBookmark={editBookmark}/>
    </div>
  );
}
export default App;

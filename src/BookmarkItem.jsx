import React from 'react'

const BookmarkItem = ({ url, index, removeBookmark, editBookmark }) =>  {
  const handleEdit = () => {
    const newUrl = prompt("Edit URL:", url);
    if (newUrl && newUrl.trim() !== "") {
      try {
        new URL(newUrl.trim());
        editBookmark(index, newUrl.trim());
      } catch (error) {
        alert("Invalid URL. Please enter a valid URL.");
      }
    }
  };
  return (
    <li className='listItems'>
      {url}
      <button id='removeBtn' onClick={() => removeBookmark(index)}>Remove</button>
      <button id='editBtn' onClick={handleEdit}>Edit</button>
    </li>
  )
}

export default BookmarkItem

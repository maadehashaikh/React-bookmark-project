import React from 'react'
import BookmarkItem from './BookmarkItem'

function BookmarkList({bookmarks, removeBookmark, editBookmark}) {
  return (
      <div id="bookMark">
      {bookmarks.map((bookmark, index) => (
        <BookmarkItem key={index} url={bookmark} index={index} removeBookmark={removeBookmark} editBookmark={editBookmark}
        />
      ))}
    </div>
  )
}

export default BookmarkList

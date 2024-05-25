import React  from 'react'

function BookmarkForm({inputValue , setInputValue , addBookmark , deleteAllBookmarks}) {
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = inputValue.trim();
    if (url === "") {
      alert("Please enter your bookmark URL!");
      return;
    }
    try {
      new URL(url);
      addBookmark(url);
    } catch (error) {
      alert("Invalid URL. Please enter a valid URL.");
    }
  };
  return (
      <form onSubmit={handleSubmit}>
      <input type="text" name="bookmark" id="bookmark" placeholder="Enter Your URL Here" value={inputValue} 
      onChange={handleChange} />
      <button id='addBookMark' type='submit'>Add</button>
      <button id='deleteAll'type='button' onClick={deleteAllBookmarks}>Delete All</button>
      </form>
  );
};

export default BookmarkForm

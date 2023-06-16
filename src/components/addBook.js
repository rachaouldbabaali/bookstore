const AddBook = () => (
  <form className="add-book-form">
    <span>ADD NEW BOOK</span>
    <input type="text" placeholder="Book title" />
    <select>
      <option value="Action">Action</option>
      <option value="Biography">Biography</option>
      <option value="History">History</option>
      <option value="Fiction">Fiction</option>
      <option value="Romance">Romance</option>
    </select>
    <input type="submit" value="Add Book" />
  </form>
);

export default AddBook;

const BookCard = ({title,author,quotes}) => {
  return (
    <div className="book-card">
      <h2>{title}</h2>
      <p>{author}</p>
      <small>{quotes} quotes saved</small>
    </div>
  );
};
export default BookCard;

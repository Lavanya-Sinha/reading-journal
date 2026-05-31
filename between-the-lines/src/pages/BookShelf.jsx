import BookCard from "../components/BookCard";


const BookShelf = ()=>{
    const books = [
  {
    id: 1,
    title: "Rebecca",
    author: "Daphne du Maurier",
    quotes: 12,
  },
  {
    id: 2,
    title: "The Secret History",
    author: "Donna Tartt",
    quotes: 28,
  },
];
    return(
     <div className="bookshelf">
  {books.map((book) => (
    <BookCard
      key={book.id}
      title={book.title}
      author={book.author}
      quotes={book.quotes}
    />
  ))}
</div>
    )
}
export default BookShelf
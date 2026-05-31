import QuoteCard from "../components/QuoteCard";

const BookPage = () => {
  return (
    <div className="book-page">
      <div className="book-header">
        <h1>Rebecca</h1>
        <p>Daphne du Maurier</p>
        <div>
          <span>12 Quotes</span>
          <span> • </span>
          <span>5 Notes</span>
        </div>
      <QuoteCard
        quote="Nothing fixes a thing so firmly in memory as the wish to forget it."
        author="Rebecca"
        reflection="This hit harder than I expected."
      />
      </div>
    </div>
  );
};
export default BookPage;

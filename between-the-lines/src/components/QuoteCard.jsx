const QuoteCard = function({ quote, author, reflection }){
    return(
    <div className="quote-card">
        <p className="quote">"{quote}"</p>
        <small className="author">— {author}</small>
            <hr />
       <div className="reflections">
         <h4>A note to myself</h4>
         <p>{reflection}</p>
       </div>
    </div>
    )
}
export default QuoteCard
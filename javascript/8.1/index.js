const book = {
  name: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishingYear: 1925,
  genre: "Fiction",
  pageCount: 218 
};

function aBook ()
{
  return (`The book ${book.name} was written by ${book.author} in the year ${book.publishingYear}`)
}

console.log(aBook());
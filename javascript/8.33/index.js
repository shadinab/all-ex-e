const book1 = {
  name: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925
};

const book2 = {
  name: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960
};

const bookUtils = {
  getFirstPublished: function(book1, book2) {
    return book1.year < book2.year ? book1 : book2;
  },

  setNewEdition: function(book, editionYear) {
    book.latestEdition = editionYear;
  },

  setLanguage: function(book, language) {
    book.language = language;
  },

  setTranslation: function(book, language, translator) {
    book.translation = {
      language: language,
      translator: translator
    };
  },

  setPublisher: function(book, name, location) {
    book.publisher = {
      name: name,
      location: location
    };
  },

  isSamePublisher: function(book1, book2) {
    if (
      book1.publisher &&
      book2.publisher &&
      book1.publisher.name === book2.publisher.name &&
      book1.publisher.location === book2.publisher.location
    ) {
      return true;
    } else {
      return false;
    }
  }
};

bookUtils.setNewEdition(book1, 2021);
bookUtils.setLanguage(book1, 'English');
bookUtils.setTranslation(book1, 'Spanish', 'Translator Name');
bookUtils.setPublisher(book1, 'Publisher A', 'New York');
bookUtils.setPublisher(book2, 'Publisher B', 'London');

console.log(bookUtils.getFirstPublished(book1, book2));
console.log(book1);
console.log(bookUtils.isSamePublisher(book1, book2));
console.log(book2);

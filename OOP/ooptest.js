var classes = require('./library.js')

describe('universityStudent, library and book classes', function() {

  describe("create a University student with a name and matric number", function() {

    it("the university student should be of type `object` and an instance of the universityStudent class", function() {
      let student = new classes.universityStudent('Ify Joy', 112345);
      expect(typeof student).toEqual(typeof {});
      expect(student instanceof classes.universityStudent).toBeTruthy();
    });

    it("the student name and matric number should be a property of the student", function() {
      let student = new classes.universityStudent('Tomi Paul', 150985);
      expect(student.name).toEqual('Tomi Paul');
      expect(student.matricNo).toEqual(150985);
    });

    it("the student should have properties `borrowedBooks` and `borrowedBooksCount`", function() {
      let student = new classes.universityStudent('Fred Rohn', 5421);
      expect(student.hasOwnProperty('borrowedBooks')).toBeTruthy();
      expect(student.hasOwnProperty('borrowedBooksCount')).toBeTruthy();
    });

  });

  describe("create a book with a name, author, category and pageNo", function() {

    it("the book should be of type `object` and an instance of the book class", function() {
      let book = new classes.book('Things fall apart', 'Chinua Achebe', 'fiction', 234);
      expect(typeof book).toEqual(typeof {});
      expect(book instanceof classes.book).toBeTruthy();
    });

    it("the name, author, category and pageNo should be properties of the book", function() {
      let book = new classes.book("The trials of Brother Jero", "Wole Soyinka", "fiction", 304);
      expect(book.name).toEqual('The trials of Brother Jero');
      expect(book.author).toEqual('Wole Soyinka');
      expect(book.category).toEqual('fiction');
      expect(book.pageNo).toEqual(304);
    });

  });

  describe("create a library with books and type attribute", function() {

    it("the library should be of type `object` and an instance of the library class", function() {
      let library = new classes.library('general');
      expect(typeof library).toEqual(typeof {});
      expect(library instanceof classes.library).toBeTruthy();
    });

    it('the library should have properties `addBook` and `removeBook`', function() {
      let library = new classes.library('general');
      expect(library.addBook).toBeDefined();
      expect(library.removeBook).toBeDefined();
    });

  });

  describe("creates a library, add books to it and remove books from it", function() {

    let library = new classes.library('general');
    let book1 = new classes.book('Things fall apart', 'Chinua Achebe', 'fiction', 234);
    let book2 = new classes.book("The trials of Brother Jero", "Wole Soyinka", "fiction", 304);

    it("the addBook method should take a book and add it to the library with a refNo", function() {
      library.addBook(book1, 'L1');
      expect(library.books).toEqual({'L1':book1});
      library.addBook(book2, 'L2');
      expect(library.books).toEqual({'L1':book1,'L2':book2});
    });

    it("the removeBook method should take a book and remove it from the library", function() {
      library.removeBook(book1);
      expect(library.books).toEqual({'L2':book2});
      library.removeBook(book2);
      expect(library.books).toEqual({});
    });

  });

  describe("undergraduateStudent and postgraduateStudent subclasses of universityStudent", function() {

    describe("create an undergraduateStudent with name and matric number", function() {
      let undergraduate = new classes.undergraduateStudent('Tomi Paul', 19870);

      it("undergraduate should be of type `object` and an instance of the universityStudent and undergraduateStudent class", function() {
        expect(typeof undergraduate).toEqual(typeof {});
        expect(undergraduate instanceof classes.universityStudent).toBeTruthy();
        expect(undergraduate instanceof classes.undergraduateStudent).toBeTruthy();
      });

      it("the student name and matric number should be a property of the student", function() {
        expect(undergraduate.name).toEqual('Tomi Paul');
        expect(undergraduate.matricNo).toEqual(19870);
      });

      it("the student should have properties `borrowedBooks` and `borrowedBooksCount`", function() {
        expect(undergraduate.hasOwnProperty('borrowedBooks')).toBeTruthy();
        expect(undergraduate.hasOwnProperty('borrowedBooksCount')).toBeTruthy();
      });

      it("the student should have methods borrowFromLibrary and returnToLibrary", function() {
        expect(undergraduate.borrowFromLibrary).toBeDefined();
        expect(undergraduate.returnToLibrary).toBeDefined();
      });

    });

    describe("create a postgraduateStudent with name and matric number", function() {
      let postgraduate = new classes.postgraduateStudent('Thomas Paul', 1808);

      it("undergraduate should be of type `object` and an instance of the universityStudent and undergraduateStudent class", function() {
        expect(typeof postgraduate).toEqual(typeof {});
        expect(postgraduate instanceof classes.universityStudent).toBeTruthy();
        expect(postgraduate instanceof classes.postgraduateStudent).toBeTruthy();
      });

      it("the student name and matric number should be a property of the student", function() {
        expect(postgraduate.name).toEqual('Thomas Paul');
        expect(postgraduate.matricNo).toEqual(1808);
      });

      it("the student should have properties `borrowedBooks` and `borrowedBooksCount`", function() {
        expect(postgraduate.hasOwnProperty('borrowedBooks')).toBeTruthy();
        expect(postgraduate.hasOwnProperty('borrowedBooksCount')).toBeTruthy();
      });

      it("the student should have methods borrowFromLibrary and returnToLibrary", function() {
        expect(postgraduate.borrowFromLibrary).toBeDefined();
        expect(postgraduate.returnToLibrary).toBeDefined();
      });

    });

  });
  
  describe("the borrowFromLibrary and returnToLibrary methods of the undergraduateStudent and postgraduateStudent", function() {

    let book1 = new classes.book('Things fall apart', 'Chinua Achebe', 'fiction', 234);
    let book2 = new classes.book("The trials of Brother Jero", "Wole Soyinka", "fiction", 304);
    let book3 = new classes.book("Arrow of God","Chinua Achebe","fiction",443);
    let book4 = new classes.book("Anthills of the savannah","Chinua Achebe","fiction",322);
    let book5 = new classes.book("No longer at ease","Chinua Achebe","fiction",299);
    let book6 = new classes.book("There was a country", 'Chinua Achebe','fiction', 313);

    let library1 = new classes.library("general");
    let library2 = new classes.library("research");

    let undergraduate = new classes.undergraduateStudent('Tomi Paul', 19870);
    let postgraduate = new classes.postgraduateStudent('Thomas Paul', 1808);

    library1.addBook(book1, 'L1');
    library1.addBook(book2, 'L2');
    library1.addBook(book3, 'L3');
    library1.addBook(book4, 'L4');
    library1.addBook(book5, 'L5');

    library2.addBook(book1, 'L1');

    it("should return error message when undergraduate tries to borrow from research library", function() {
      expect(undergraduate.borrowFromLibrary(library2, book1)).toEqual("Hey pal, this is a research library. Research libraries are for PG students");
    });

    it("should return error message when undergraduate tries to borrow more than 3 books", function() {
      undergraduate.borrowFromLibrary(library1, book1);
      undergraduate.borrowFromLibrary(library1, book2);
      undergraduate.borrowFromLibrary(library1, book3);
      expect(library1.books).toEqual({'L4':book4, 'L5':book5});
      expect(undergraduate.borrowedBooks).toEqual({'L1':book1, 'L2':book2, 'L3':book3});

      expect(undergraduate.borrowFromLibrary(library1, book4)).toEqual("You can only borrow 3 books from the library");
    });

    it("should return error message when postgraduate tries to borrow more than 5 books", function() {
      library2.addBook(book2, 'L2');
      library2.addBook(book3, 'L3');
      library2.addBook(book4, 'L4');
      library2.addBook(book5, 'L5');
      library2.addBook(book6, 'L6');
      postgraduate.borrowFromLibrary(library2, book1);
      postgraduate.borrowFromLibrary(library2, book2);
      postgraduate.borrowFromLibrary(library2, book3);
      postgraduate.borrowFromLibrary(library2, book4);
      postgraduate.borrowFromLibrary(library2, book5);

      expect(postgraduate.borrowFromLibrary(library2, book6)).toEqual("You can only borrow 5 books from the library");

    });

  });

});

const {
    ListBookResponse,
    CreateBookResponse,
    DeleteBookResponse,
    BookMessage,
    AuthorMessage,
  } = require('../protos/book_message_pb');
var grpc = require('@grpc/grpc-js');

const { ListBook, CreateBook, DeleteBook } = require('../resource/book');

const BookController = {
    list: async (call, callback) => {
        const response = new ListBookResponse();
        const books = await ListBook()
        books.forEach(book => {
            response.addData(marshal(book));
        });
        callback(null, response);
    },
    create: async (call, callback) => {
        var input = {
            title: call.request.getTitle(),
            image: call.request.getImage(),
            price: call.request.getPrice(),
            author_id: call.request.getAuthorId(),
        }
        const book = await CreateBook(input)
        if (book) {
            const response = new CreateBookResponse(); 
            response.setData(marshal(book))
            callback(null, response)
        } else {
            const error = new Error('Failed to insert book');
            callback(error, null)
        }
    },
    delete: async (call, callback) => {
        try {
            var id = call.request.getId()
            const success = await DeleteBook(id)
            if (success) {
                callback(null, new DeleteBookResponse())
            } else {
                const error = {code: grpc.status.NOT_FOUND, message: 'Failed to delete book'};
                callback(error, null);
            }
        } catch (error) {
            const internalError = {code: grpc.status.UNKNOWN, message: 'Internal server error'};
            callback(internalError, null);
        }
    },
}

function marshal(book) {
    const bookMessage = new BookMessage();
    bookMessage.setId(book.id);
    bookMessage.setTitle(book.title);
    bookMessage.setImage(book.image);
    bookMessage.setPrice(book.price);
    bookMessage.setAuthorId(book.author_id);

    if (book.author) {
        const authorMessage =  new AuthorMessage()
        authorMessage.setId(book.author.id)
        authorMessage.setName(book.author.name)
        bookMessage.setAuthor(authorMessage)
    }
    return bookMessage
}
module.exports = {BookController}
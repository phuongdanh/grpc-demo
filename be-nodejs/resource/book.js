const fs = require('fs');

const DATA_PATH = "/Users/blubberbee/workspace/own/demo/gRPC/database/data.json"

const queryData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(DATA_PATH, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(JSON.parse(data));
        });
    });
};

const writeData = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(DATA_PATH, JSON.stringify(data, null, 4), 'utf8', (err) => {
            if (err) {
                reject(false);
                return;
            }
            resolve(true);
        });
    });
};

const ListBook = async () => {
    try {
        const jsonData = await queryData();
        const books = jsonData.books;
        const authors = jsonData.authors;
        books.forEach(book => {
            authors.forEach(author => {
                if (book.author_id == author.id) {
                    book.author = author
                }
            })
        });
        return books;
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return [];
    }
};

const CreateBook = async (input) => {
    try {
        const jsonData = await queryData();
        input.id = jsonData.books.length + 1;
        jsonData.books.push(input);
        const successed = await writeData(jsonData)
        return successed ? input : false
    } catch {
        return false
    }
}

const DeleteBook = async (id) => {
    try {
        const jsonData = await queryData();
        const bookIndex = jsonData.books.findIndex((book) => book.id === id);
        if (bookIndex === -1) {
            return false;
        }
        jsonData.books.splice(bookIndex, 1);
        return await writeData(jsonData)
    } catch {
        return false
    }
}

module.exports = { ListBook, CreateBook, DeleteBook };
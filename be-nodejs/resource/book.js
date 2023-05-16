const fs = require('fs');

const queryData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/data.json', 'utf8', (err, data) => {
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
        fs.writeFile('./resource/data.json', JSON.stringify(data, null, 4), 'utf8', (err) => {
            if (err) {
                reject(false);
                return;
            }
            resolve(true);
        });
    });
};

const BookList = async () => {
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

const BookInsert = async (input) => {
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

const BookDelete = async (id) => {
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

module.exports = { BookList, BookInsert, BookDelete };
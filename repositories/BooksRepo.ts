import { book } from "../models/books";


const createBook = async(newBook: any) => {
    try {
        const newB = await book.create(newBook);
        console.log("Successfully created book!!!", newB);

    } catch(err) {
        console.log("some error occured while creating the book ", err);
    }
}

const getAllBooks = async() => {
    try{
        const allBooks = await book.findAll();
        console.table(allBooks.map((b: { toJSON: () => any; }) => b.toJSON()));
    }
    catch(error){
        console.log("Error while fetching the data of all books ", error);
    }
}

const getBookById = async(bookId: number) => {
    try{
        const isBook = await book.findByPk(bookId);
        if(isBook){
            console.table(isBook.toJSON());
        }
        else{
            console.log("Book not Found");
        }
    }
    catch(error){
        console.log("Error occurred while fetching Book ",error);
    }
}

const updateBook = async(bookId: number,updatedData: object) =>{ 
    try{
        const b  =await book.findByPk(bookId);
        if(b){
            await b.update(updatedData);
        }
        else{
            console.log("Book not exists ");
        }
    }
    catch(error){
        console.log("Error while fetching the book",error);
    }
}

const deleteBook = async(bookId: any) => {
    try{
        const b = await book.findByPk(bookId);
        if(b){
            await b.destroy();
            console.log("Successfully deleted book!!");
        }
        else{
            console.log("Book not exists ");
        }
    }
    catch(error){
        console.log("Error while fetching the book ",error);
    }
}

export { createBook, getAllBooks, getBookById, updateBook, deleteBook };
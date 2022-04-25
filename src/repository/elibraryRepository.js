import axios from '../custom-axios/axios';

const ELibraryService = {
    fetchAuthors: () => {
        return axios.get("/authors")
    },      
    fetchCategories: () => {
        return axios.get("/categories")
    },
    fetchBooks: ()=>{
        return axios.get("/books")
    },
    editBook: (book, formValues)=>{
        return axios.put(`/books/edit/${book.id}`, {
            ...book,
            ...formValues
        })
    },
    deleteBook: (bookId) =>{
        return axios.delete(`/books/${bookId}`)
    },
    markAsTaken: (bookId) =>{
        return axios.post(`/books/take/${bookId}`)
    },
    createBook: (book) =>{
        return axios.post(`/books?authorId=${book.author}`, 
        {
                name: book.name,
                category: book.category,
                copies: book.copies
        })
    },
    bookPagination: (pageNumber) =>{
        return axios.get(`/books/pagination/?page=${pageNumber}&size=5`)
    }
}

export default ELibraryService;
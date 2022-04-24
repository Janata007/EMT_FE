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
    }
}

export default ELibraryService;
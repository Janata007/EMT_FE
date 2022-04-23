import axios from '../custom-axios/axios';

const ELibraryService = {
    fetchAuthors: () => {
        return axios.get("/api/authors")
    }
}

export default ELibraryService;
import { useContext } from "react";
import booksContext from "../Context/Books";

function useBooksContext(){
    return useContext(booksContext);
}

export default useBooksContext;
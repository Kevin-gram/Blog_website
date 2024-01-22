import React, { createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

const GETBLOGS = "https://blogapi-se2j.onrender.com/api/v1/blogs";

const AppProvider = ({ children }) => {
    const [blogs, setBlogs] = React.useState([]);

    const fetchBlogs = async () => {
        try{
          const response = await axios.get(GETBLOGS);
          const blogs = response.data.blogs;
          setBlogs(blogs);
        } catch(err){
          console.log(err)
        }
      }
    
      React.useEffect(() => {
        fetchBlogs();
      }, [])

    return (
        <AppContext.Provider value={{blogs}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;
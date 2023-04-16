import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

const QuioscoContext = createContext();

export function QuioscoProvider({ children }) {
   const [categories, setCategories] = useState([]);
   const [currentCategory, setCurrentCategory] = useState({});

   const getCategories = async () => {
      const { data } = await axios('/api/categories');
      setCategories(data);
   }

   useEffect(() => {
      getCategories();
   }, [])

   useEffect(() => {
      setCurrentCategory(categories[0]);
   }, [categories])


   const handleClickCategory = id => {
      const category = categories.filter(cat => cat.id === id);
      setCurrentCategory(category[0]);
   }

   return (
      <QuioscoContext.Provider
         value={{
            categories,
            currentCategory,
            handleClickCategory
         }}
      >
         {children}
      </QuioscoContext.Provider>
   )
}

export default QuioscoContext
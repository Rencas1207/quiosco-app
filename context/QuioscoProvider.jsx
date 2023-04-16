import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

const QuioscoContext = createContext();

export function QuioscoProvider({ children }) {
   const [categorys, setCategorys] = useState([]);

   const getCategorys = async () => {
      const { data } = await axios('/api/categorys');
      setCategorys(data);
   }

   useEffect(() => {
      getCategorys();
   }, [])

   return (
      <QuioscoContext.Provider
         value={{
            categorys
         }}
      >
         {children}
      </QuioscoContext.Provider>
   )
}

export default QuioscoContext
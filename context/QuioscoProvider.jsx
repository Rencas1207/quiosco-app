import { createContext } from 'react'

export const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
   return (
      <QuioscoContext.Provider
         value={{

         }}
      >
         {children}
      </QuioscoContext.Provider>
   )
}

export default QuioscoProvider
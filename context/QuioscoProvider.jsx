import axios from 'axios';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const QuioscoContext = createContext();

export function QuioscoProvider({ children }) {
   const [categories, setCategories] = useState([]);
   const [currentCategory, setCurrentCategory] = useState({});
   const [product, setProduct] = useState({});
   const [modal, setModal] = useState(false);
   const [pedido, setPedido] = useState([]);
   const [name, setName] = useState('');
   const [total, setTotal] = useState(0);

   const router = useRouter();

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

   useEffect(() => {
      const newTotal = pedido.reduce((total, product) => (product.price * product.quantity) + total, 0);
      setTotal(newTotal);
   }, [pedido])

   const handleClickCategory = id => {
      const category = categories.filter(cat => cat.id === id);
      setCurrentCategory(category[0]);
      router.push('/');
   }

   const handleSetProduct = product => {
      setProduct(product)
   }

   const handleChangeModal = () => {
      setModal(!modal)
   }

   const handleAddPedido = ({ categoryId, ...product }) => {
      if (pedido.some(productState => productState.id === product.id)) {
         // update quantity
         const pedidoUpdated = pedido.map(productState => productState.id === product.id
            ? product : productState);
         setPedido(pedidoUpdated);
         toast.success('Guardado Correctamente');
      } else {
         setPedido([...pedido, product]);
         toast.success('Agregado al pedido');
      }
      setModal(false);
   }

   const handleEditQuantities = id => {
      const productUpdate = pedido.filter(product => product.id === id)
      setProduct(productUpdate[0]);
      setModal(true);
   }

   const handleRemoveProduct = id => {
      const pedidoUpdated = pedido.filter(product => product.id !== id);
      setPedido(pedidoUpdated);
   }

   const colocarOrden = async (e) => {
      e.preventDefault();
   };

   return (
      <QuioscoContext.Provider
         value={{
            categories,
            currentCategory,
            handleClickCategory,
            product,
            handleSetProduct,
            modal,
            handleChangeModal,
            handleAddPedido,
            pedido,
            handleEditQuantities,
            handleRemoveProduct,
            name,
            setName,
            colocarOrden,
            total
         }}
      >
         {children}
      </QuioscoContext.Provider>
   )
}

export default QuioscoContext
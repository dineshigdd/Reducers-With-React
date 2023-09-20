import './App.css'
import { useReducer , useState } from 'react'
import productReducer from './productReducer'
import ProductInventory from './product.json';
import ProductList from './ProductList';

function App() {
  const[ products, dispatch ] = useReducer( productReducer, ProductInventory );
  const [ index, setIndex ] = useState( ProductInventory.length + 1 )
  const [ isEditing , setIsEditing ] = useState( false )
  const [ updatedValue, setUpdatedValue ] = useState('');
  const [selectedOption, setSelectedOption] = useState('');



  const addProduct = () =>{
    setIndex( index + 1 )
    setIsEditing( false );
    dispatch({
        type: "add_product",
        payload:{ 
            "id": index,
            "name": `Product ${ index }`,            
          }
     })
  }

  const deleteProduct = () =>{
    setIsEditing( false );
    dispatch( {
      type: "remove_product",
      payload:{ "id": Number(selectedOption)}
    })
  }

  const updateProduct = () =>{
    setIsEditing( true );    
  } 

  const handleOnSave = ( e )=>{
    dispatch({
      type: "update_product",
      payload: {
        "id":  Number(selectedOption),
        "name": updatedValue,       
      }})
  }

  const handleOptionChange = ( selectedId ) =>  setSelectedOption( selectedId );
  
 
  
  return (
    <>  
      <form>
        { products.map(  (product ) => <div key={ product.id }>
         <ProductList 
            product={ product }  
            checked={selectedOption === product.id }
            onChange={ ()=>handleOptionChange(  product.id )}
            name="product"    
         />
         
         </div>)    }
      </form>
      
      { ( selectedOption !== '' && isEditing )  ? <>
          <input onChange={ e=> setUpdatedValue(e.target.value )} type="text" />
          <button onClick={ handleOnSave }>Save</button></> :   '' }
      <div>       
        <button onClick={ addProduct }>Add</button>
        <button onClick= { deleteProduct}>Delete</button>
        <button onClick={ updateProduct }>Update</button>
      </div>
    </>
  )
}

export default App

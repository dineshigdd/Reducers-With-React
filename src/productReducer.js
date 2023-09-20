export default function productReducer( state , action ) {

  switch( action.type ){
      case 'add_product': return [...state, action.payload ]
      case 'remove_product':
      return state.filter( product => product.id !== action.payload.id );
      case 'update_product':
      return state.map(product =>  (
          product.id === action.payload.id) ? 
           // If the product ID matches the updated product's ID, update it   
          { ...product, ...action.payload }
          :           
           // Otherwise, leave the product unchanged
          product
        
      );
      default:
        return state
  }
 
 
}




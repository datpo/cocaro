import React from 'react'

const ChildrenFunc = (props) =>{
    const t =  props.func("datpo")
  return(

     <h1>
         {t}
     </h1>
  )
}

export default ChildrenFunc;
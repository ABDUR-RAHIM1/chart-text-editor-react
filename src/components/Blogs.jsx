import React from 'react'

function Blogs(props) {
    const {title , category , desc} = props.data;
    console.log(desc)
  return (
    <div>
         <h3>{title}</h3>
         <p>{category}</p>
          <div dangerouslySetInnerHTML={{ __html: desc }}/> 
    </div>
  )
}

export default Blogs
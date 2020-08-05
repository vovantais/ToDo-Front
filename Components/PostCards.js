import React from 'react'

function PostCards({ value}) {
   return (
      <div className="container-sm">
         <div className="card mt-3">
            <div className="card-body">
               {value}
            </div>
         </div>
      </div>
   )
}

export default PostCards

import React from 'react'

const docs = ({params}) => {
    if(params.slug?.length === 2){
        return <h1>This is the concept {params.slug[1]} of feature {params.slug[0]}</h1>
    }
    else if(params.slug?.length === 1){
        return <h1>Viewing for feature {params.slug[0]}</h1>
    }
  return (
    <div>
      <h1>Welcome to the docs page</h1>
    </div>
  )
}

export default docs

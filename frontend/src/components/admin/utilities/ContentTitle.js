import React from 'react'

const ContentTitle = ({title}) => {
  return (
    <div className='content-title'>
        <h1>{title}</h1>
    </div>
  )
}

ContentTitle.defaultProps = {
    title: "default",
  };

export default ContentTitle
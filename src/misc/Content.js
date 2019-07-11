import React from 'react'
import News from './News'

const Content = (props) => {

  return(
    <div className='Content'>
      {props.news && props.news.map((item, key) =>
        <News item={item} key={key} />
      )}
    </div>
  )
}

export default Content

import React from 'react'
import Typography from '@material-ui/core/Typography';
import News from './News'

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const Content = (props) => {
  const { activeTab } = props

  return(
    <div className='Content'>
      {props.news && props.news.map((item, key) =>
        <News item={item} key={key} />
      )}
    </div>
  )
}

export default Content

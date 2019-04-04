import React, {Fragment} from 'react'

function Balance(props) {
    const style = {
        color: props.total > 0 ? 'green' : 'red'
    }
  return (
    <Fragment>
        
        <h3>Balance</h3>
        <h3 style={style}> $ {props.total.toFixed(2)} </h3>
      
    </Fragment>
  )
}

export default Balance

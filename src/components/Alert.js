import React from 'react'//rfce

function Alert(props) {
  if (props.alert === null) {
    return ;
  }

  return (
    <div className={`alert alert-${props.alert.type}`} role="alert">
      <strong>{props.alert.type}</strong>{props.alert.message}
    </div>
  );
}

export default Alert;

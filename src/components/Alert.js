import React from 'react'//rfce

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} setTimeout(()->{
        document.querySelector('.alert').remove();
    }) alert-dismissable fade show`}role="alert">
        <strong>{props.alert.type}</strong>{props.alert.message}
    </div>
  )
}
export default Alert

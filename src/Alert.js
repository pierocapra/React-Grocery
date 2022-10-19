import React, { useEffect } from 'react'

const Alert = ({type}) => {
  if (type == "itemAdded") {
    return <div className="alert alert-success">Item Added To The List</div>
  }
  if (type == "clearItems") {
    return <div className="alert alert-danger">Empty List</div>
  }
  if (type == "itemRemoved") {
    return <div className="alert alert-danger">Item Removed</div>
  }
  if (type == "itemEdited") {
    return <div className="alert alert-success">Item Edited</div>
  }
  if (type == "insertValue") {
    return <div className="alert alert-danger">Insert Value</div>
  }
}

export default Alert

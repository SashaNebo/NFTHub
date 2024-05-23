import ReactDOM from 'react-dom'

export const createMyPortal = (children, container) => {
  return ReactDOM.createPortal(children, container)
}
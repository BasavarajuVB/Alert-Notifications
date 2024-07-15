// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      <div className="children-container">{children}</div>
      <GrFormClose />
    </div>
  )
}
export default Notification

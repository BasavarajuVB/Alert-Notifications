// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderSuccessView = () => (
    <Notification>
      <AiFillCheckCircle className="success-icon" />
      <div className="text-container">
        <h1 className="notification-type-success">Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </Notification>
  )
  const rendeErrosView = () => (
    <Notification>
      <RiErrorWarningFill className="error-icon" />
      <div>
        <h1 className="notification-type-error">Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
    </Notification>
  )
  const renderWarningView = () => (
    <Notification>
      <MdWarning className="warning-icon" />
      <div>
        <h1 className="notification-type-warning">Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
    </Notification>
  )

  const renderInfoView = () => (
    <Notification>
      <MdInfo className="info-icon" />
      <div>
        <h1 className="notification-type-info">Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div>
        <h1 className="main-heading">Alert Notifications</h1>
        {renderSuccessView()}
        {rendeErrosView()}
        {renderWarningView()}
        {renderInfoView()}
      </div>
    </div>
  )
}

export default AlertNotifications

import React from 'react';

const Notification = ({ notification }) => {
  return <li>{notification}</li>
}

const Notifications = ({ notifications }) => {
  if (!notifications) return null;

  return (
    <div className="col-md-12">
      <marquee behavior="alternate">おしらせ〜</marquee>
      <ul>
        {
          notifications.map(({ id, notification }) => {
            return <Notification key={`notification-${id}`} notification={notification} />
          })
        }
      </ul>
    </div>
  )
}

export default Notifications;

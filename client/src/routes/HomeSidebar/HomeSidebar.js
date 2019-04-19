import React, { Component } from 'react';
import { ReactComponent as MessagesButton } from '../../img/messagesButton.svg';
import { ReactComponent as NotificationButton } from '../../img/notificationButton.svg';
import { ReactComponent as SettingsButton } from '../../img/settingsButton.svg';
import { ReactComponent as CreateButton } from '../../img/createButton.svg';
import './style.css';

class HomeSidebar extends Component {

    render () {
        return <CreateButton/>
    }

}

export default HomeSidebar;
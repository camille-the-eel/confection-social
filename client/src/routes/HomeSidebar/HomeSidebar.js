import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { ReactComponent as MessagesButton } from '../../img/messagesButton.svg';
import { ReactComponent as NotificationButton } from '../../img/notificationButton.svg';
import { ReactComponent as SettingsButton } from '../../img/settingsButton.svg';
import { ReactComponent as CreateButton } from '../../img/createButton.svg';
import './style.css';

class HomeSidebar extends Component {

    render () {
        return (
        <div className="homeSidebarContainer">
            <ul className="homeSidebar">
                <li className="centeredButtons">
                    <div class="buttonMenu">
                        <li>
                            <Link to="/messageInbox">
                                <MessagesButton id="messagesButton" className="customButton"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/notificationCenter">
                                <NotificationButton id="notificationButton" className="customButton"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/accountSettings">
                                <SettingsButton id="settingsButton" className="customButton"/>
                            </Link>
                        </li>
                    </div>
                    <div class="buttonCreate">
                        <li>
                            <Link to="/createContent">
                                <CreateButton id="createButton"/>
                            </Link>
                        </li>
                    </div>
                </li>
            </ul>
        </div>
        )
    }

}

export default HomeSidebar;
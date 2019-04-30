import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { ReactComponent as MessagesButton } from '../../img/messagesButton.svg';
import { ReactComponent as NotificationButton } from '../../img/notificationButton.svg';
import { ReactComponent as SettingsButton } from '../../img/settingsButton.svg';
import { ReactComponent as CreateButton } from '../../img/createButton.svg';
import { ReactComponent as LogoutButton } from '../../img/logoutButton.svg';

import CurrentUser from "../../AppContext";

import './style.css';

class HomeSidebar extends Component {
    // constructor() {
    //     super()
    // }

    componentDidMount() {
        // console.log(this);
    }

    logout = () => { 
        this.context.logOut();
    }

    render () {
        return (
        <div className="homeSidebarContainer">
            <ul className="homeSidebar">
                <div className="centeredButtons">
                    <div className="buttonMenu">
                        <li>
                            <Link>
                            {/* <Link to="/messageInbox"> */}
                                <MessagesButton id="messagesButton" className="customButton"/>
                            </Link>
                        </li>
                        <li>
                            {/* <Link to="/notificationCenter"> */}
                            <Link>
                                <NotificationButton id="notificationButton" className="customButton"/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                            {/* <Link to="/accountSettings"> */}
                                <SettingsButton id="settingsButton" className="customButton"/>
                            </Link>
                        </li>
                        <li>
                            <LogoutButton id="logoutButton" className="customButton" onClick={this.logout}/>
                        </li>
                    </div>
                    <div className="buttonCreate">
                        <li>
                            <CreateButton id="createButton" onClick={this.props.toggleCreate}/>
                        </li>
                    </div>
                </div>
            </ul>
        </div>
        )
    }
}

HomeSidebar.contextType = CurrentUser;
export default HomeSidebar;
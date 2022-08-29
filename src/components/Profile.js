import React, {useRef, useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import UrlRequest from "../request/UrlRequest";
import BalanceRequest from "../request/BalanceRequest";
import axios from "axios";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [urlToPosts, setUrlToPost] = useState(' ')

    const urlToPost = {
        url: urlToPosts,
    };

    const handleClick = async (event) => {
        event.preventDefault();
          axios.post('https://630b3c26f280658a59d82ec1.mockapi.io/url', urlToPost)
             .catch(error => {
                console.error('Error', error);
             });
    };
    return (
        isAuthenticated && (
            <div className="card" >
                <LogoutButton />
                <div className="card-home" >
                <div className="card-header">
                    <div className="card-cover"
                         style={{backgroundImage: "url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')"}}></div>
                    <img className="card-avatar"
                         src={user.picture}
                         alt={user.name}/>
                    <h1 className="card-fullname">{user.name}</h1>
                    <h2 className="card-email">{user.email}</h2>
                </div>
                    <div className="card-section is-active" >
                        <div className="card-content">
                            <h2>Coins</h2>
                            <BalanceRequest />
                        </div>
                    </div>
            </div>
                <div className="card-main" >
                    <div className="card-section" >
                        <div className="card-content">
                            <h2 className="card-subtitle">URL List</h2>
                            <div className="add-url">
                                <input
                                    className="form-control"
                                    type="text"
                                    id="message"
                                    name="message"
                                    onChange={e => setUrlToPost(e.target.value)}
                                />
                                <input onClick={handleClick}
                                       value="Add Url"
                                       type="submit"
                                />
                            </div>
                            <UrlRequest />
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Profile;
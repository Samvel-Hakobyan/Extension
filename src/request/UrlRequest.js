import React, {useState} from 'react';
import axios from "axios";

function UrlRequest() {
    const [urls, setUrl] = useState([])
    axios.get("https://630b3c26f280658a59d82ec1.mockapi.io/url")
            .then(res => {
                setUrl(res.data)
            })
            .catch(error => {
                console.error(error);
            });
    return (
        <div className="card-content">
            {urls.length > 0 && (
                <ul>
                    {urls.map(url => (
                        <li key={url.id}>{url.url}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UrlRequest;
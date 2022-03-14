import React from 'react';
import './headerchat.css';

export const HeaderChat = () => {
    return (
        <div className="header-chat">
            <div className="chat-user">
                <img src="https://pps.whatsapp.net/v/t61.24694-24/253864640_1013475712880423_708655968896025270_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVzg6FRq_BzVDgArh-CV-I70KuDqGj-lZwtm_95ONV_ZyQ&oe=62350D95"/>  
                <div className="user-status">
                    <h3>Contacto 1 :3</h3>
                    {/* <p>En linea</p> */}
                </div>
            </div>

            <div className="nav-options">
                <i class="las la-search"></i>
                <i class="las la-ellipsis-v"></i>
                {/* <img src="https://img.icons8.com/plumpy/24/000000/speech-bubble--v2.png"/> */}
            </div>
        </div>
    )
}
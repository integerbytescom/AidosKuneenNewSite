import React from 'react';
import './Contacts.css';
import './ContactsMedia.css';
import {contactsData} from "./ContactsData";

const Contacts = ({lang}) => {
    return (
        <div className={`Contacts container mb-3`}>
            {/*form text block with email*/}
            <div className="form-text">
                <h4>
                    {
                        lang==='en'?'For any feedback , suggestions or business proposals write email to':
                            lang==='ru'?'Для любых отзывов или деловых предложений пишите на почту':
                                'Für Feedback, Vorschläge oder Geschäftsvorschläge schreiben Sie eine E-Mail an'
                    }
                </h4>
                <h1><a href="mailto:admin@aidoskuneen.com">admin@aidoskuneen.com</a></h1>
            </div>

            <div className="social-icons-container">
                {
                    contactsData.map((soc,ids) => (
                        <a
                            key={ids}
                            href={soc.url}
                            target={"_blank"}
                            rel={"noreferrer"}
                            className={'soc-link'}
                        >
                            <img src={soc.image} alt={soc.alt}/>
                        </a>
                    ))
                }
            </div>
        </div>
    );
};

export default Contacts;
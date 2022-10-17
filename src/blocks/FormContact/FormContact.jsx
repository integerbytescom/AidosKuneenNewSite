import React, {useRef, useState} from 'react';
import {Form, Spinner} from "react-bootstrap";
import './FormContact.css';
import './FormContactMedia.css';
import * as emailjs from "@emailjs/browser";
import {Slide} from "react-awesome-reveal";

const FormContact = ({lang}) => {

    //for inputs value
    const [email,setEmail] = useState('')
    const [text,setText] = useState('')

    const [spinner,setSpinner] = useState(false)

    //result form after send
    const [resForm,setResForm] = useState({})

    //ref for form
    const formRef = useRef()

    //for send form
    const handleSendForm = async e =>{
        e.preventDefault()
        setSpinner(true)
        await emailjs.sendForm('service_fwjjib6', 'template_eit5llq', formRef.current, 'i4qn_i5OB48CqVSFb')
            .then((result) => {
                setResForm({error: false, ok:'The form has been submitted!'})
            }, (error) => {
                setResForm({error: 'Form submission error.', ok:false})
            });
        setEmail('')
        setText('')
        setSpinner(false)
        setTimeout(() => setResForm({}),1000 * 10)
    }

    return (
        <div className={`FormContact container`} id={'form'}>

            <h1>{lang==='ru'? 'Контакты':'Contacts us'}</h1>

            <Slide direction={'left'}>
            <Form ref={formRef} onSubmit={handleSendForm}>
                <h5>
                    {
                        lang==='ru'? 'Напишите нам':
                            lang==='en'? 'Write to us' : 'Schreib uns'
                    }
                </h5>

                <input
                    required={true}
                    name={"email"}
                    type="email"
                    placeholder={'Email'}
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <textarea
                    required={true}
                    name={"text"}
                    placeholder={'Text'}
                    rows="3"
                    value={text}
                    onChange={event => setText(event.target.value)}
                />

                <footer>
                    {
                        spinner?
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                variant={'light'}
                            />
                            :
                            <button type={"submit"}>
                                {
                                    lang==='ru'? 'Отправить':
                                        lang==='en'? 'Send' : 'Senden'
                                }
                            </button>
                    }

                    {
                        resForm.error?
                            <p className={'error-p'}>{resForm.error}</p>:
                            resForm.ok?
                                <p className={'success-p'}>{resForm.ok}</p>:''
                    }
                </footer>

            </Form>
            </Slide>
        </div>
    );
};

export default FormContact;
import React from "react";
import { UserContext } from './context';

export default function Content2() {
    let [user , setUser]= React.useContext(UserContext)
    const ContentStyle = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        padding: 10,
        margin: 10,
    }
    const onClickSignin = (event) =>{
        event.preventDefault()
        setUser('Tom Jerry')
    }
    return (
        <div style={ContentStyle}>
            {
                (user)
                ? <span>Hello {user}</span>
                :<span>Please <a href="" onClick={onClickSignin}>Sign In</a></span>
            }
        </div>
    )
}
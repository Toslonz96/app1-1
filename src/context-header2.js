import React from "react";
import { UserContext } from './context';

export default class Header2 extends React.Component{
    static contextType = UserContext

    render(){
        let [user,setUser] = this.context
        const hederStyle = {
            backgroundColor:'#cee',
            textAlign:'center',
            padding:5
        }
        const onClickSignout = (event) =>{
            event.preventDefault()
            setUser()
        }
        const onClickSignin = (event) =>{
            event.preventDefault()
            setUser('Tom Jerry')
        }
        return(
            <div style={hederStyle}>
                <a href="">Home</a>&nbsp;-&nbsp;
                <a href="">Product</a>&nbsp;-&nbsp;
                <a href="">Contact Us</a>&nbsp;-&nbsp;&nbsp;
                {
                    (user)
                    ?<span>[{user}&nbsp;:&nbsp;<a href="" onClick={onClickSignout}>Sign Out</a>]</span>
                    :<span>[<a href="" onClick={onClickSignin}>Sign In</a>]</span>
                }
            </div>
        )
    }
}
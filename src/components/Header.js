import React, { Component } from 'react'
import './List.css'

class Header extends Component{
    render(){
        return (
                <div>
                    <ul>
                    <li ><a class="active" href="#home">Home</a></li>
                    <li ><a href="#Activities" > Activities </a> </li>
                    <li ><a href="#Abilities">  Abilities </a> </li>
                    <li ><a href="#Education">  Education </a></li>
                    <li ><a href="#Experience"> Experience </a></li>
                    <li ><a href="#Contact Me"> Contact Me </a></li>
                    </ul>
                </div>
        );
    }
}
export default Header;
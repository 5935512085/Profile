import React from 'react'
import './List.css'


function List(){
    return (    
        
    <div className = "Menu" >
        <ul className = "SubMenu"> Home </ul>
        <ul className = "SubMenu" > Activities </ul>
        <ul className = "SubMenu"> Abilities </ul>
        <ul className = "SubMenu"> Education </ul>
        <ul className = "SubMenu"> Experience </ul>
        <ul className = "SubMenu"> Contact Me </ul>
    </div>
    );
}
export default List;

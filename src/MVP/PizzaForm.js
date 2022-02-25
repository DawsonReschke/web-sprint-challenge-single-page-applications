import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
const API_ENDPOINT = 'https://reqres.in/api/orders'
// setting this section to be invisible so that I can create my project the way that I want to...
const HiddenDiv = styled.div`
opacity:0;
`

const validateName = (name)=>name.length < 2 ? "name must be at least 2 characters" : ''

const PizzaForm = (props)=>{
    const [customerName,setCustomerName] = useState('')
    const [isNotValidName,setNotValidName] = useState("name must be at least 2 characters"); 
    const [pepChecked,setPepChecked] = useState(false); 
    const [pepperChecked,setPepperChecked] = useState(false); 
    const [pineappleChecked,setPineappleChecked] = useState(false); 
    const [oliveChecked,setOliveChecked] = useState(false); 
    const [specialInstructions,setSpecialInstructions] = useState('')

    const handelSubmit = (form)=>{
        form.preventDefault();
        axios.post(API_ENDPOINT,form.target)
    }

    return(
        <HiddenDiv>
        <div>
            <div>
                {isNotValidName && <p>{isNotValidName}</p>}
            </div>
        <form onSubmit={(a)=>handelSubmit(a)} id={props.id}>

            <input
                type="text"
                name="name"
                id="name-input"
                value={customerName}
                onChange={(evt)=>{setCustomerName(evt.target.value); setNotValidName(validateName(evt.target.value))}}
            />
            <select id="size-dropdown">
                <option value={'small'}>small</option>
                <option value={'medium'}>medium</option>
                <option value={'large'}>large</option>
            </select>
            <div id="checklist">
                <input
                type="checkbox"
                name="pep"
                onChange={(evt)=>{setPepChecked(evt.target.checked)}}
                />
                <input
                type="checkbox"
                name="pepper"
                onChange={(evt)=>{setPepperChecked(evt.target.checked)}}
                />
                <input
                type="checkbox"
                name="pineapple"
                onChange={(evt)=>{setPineappleChecked(evt.target.checked)}}
                />
                <input
                type="checkbox"
                name="olive"
                onChange={(evt)=>{setOliveChecked(evt.target.checked)}}
                />
            </div>
            <input
            type="text"
            id="special-text"
            value={specialInstructions}
            onChange={(evt)=>setSpecialInstructions(evt.target.value)}
            />
            <input
            type="submit"
            id="order-button"
            />
        </form>
    </div>
    </HiddenDiv>
    )
}

export default PizzaForm; 
import {useState} from "react";
import * as React from "react";
import "./Form.css"

interface FormData{
    name: string;
    reason: string;
    believability: string ;
    creativity: string;
    extra:string;
    urgency:string;
}

const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        name:"",
        reason:"",
        believability:"",
        creativity:"",
        extra:"",
        urgency:""
    })

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        console.log("Przesłane dane: ", formData)
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>){
        const {name, value} = event.target
        setFormData(prevState => ({...prevState, [name]: value}))
    }
}
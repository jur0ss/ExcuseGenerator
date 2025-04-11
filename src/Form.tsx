import {useState} from "react";
import * as React from "react";
import "./Form.css"

interface FormData{
    name: string;
    reason: string;
    date: string;
    believability: number;
    creativity: string;
    extra:string;
    urgency:boolean;
}

const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        name:"",
        reason:"",
        date:"",
        believability:0,
        creativity:"",
        extra:"",
        urgency:false
    })

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        console.log("Przesłane dane: ", formData)
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>){
        const {name, value} = event.target
        setFormData(prevState => ({...prevState, [name]: value}))
    }

    const today = new Date().toISOString().split('T')[0];

    return(
        <div>
            <h2>Generator wymówek</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nazwa
                    <input
                        type="text" name="name"
                        value={formData.name}
                        onChange={handleChange}/>
                </label>

                <label>
                    Powód
                    <select
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}>

                        <option disabled>Wybierz z listy</option>
                        <option>Spóźnienie</option>
                        <option>Brak pracy domowej</option>
                        <option>Nieobecność</option>
                        <option>Brak pracy na lekcji</option>
                    </select>
                </label>

                <label>
                    Poziom wiarygodności
                    <input
                        type="range" name="believability"
                        value={formData.believability}
                        min="1" max="10" step="1"
                        onChange={handleChange}/>
                </label>


                <label>
                    Data zdarzenia
                    <input
                        type="date" name="date"
                        value={formData.date}
                        min="2025-01-01"
                        max={today}
                        onChange={handleChange}/>
                </label>

                <label>
                    Poziom kreatywności
                    <select
                        name="creativity"
                        value={formData.creativity}
                        onChange={handleChange}>

                        <option disabled>Wybierz z listy</option>
                        <option>Tragedia</option>
                        <option>Kiepsko</option>
                        <option>Średnio</option>
                        <option>Nawet nawet</option>
                        <option>Całkiem oryginalne</option>
                    </select>
                </label>

                <label>
                    Dodatkowe szczegóły
                    <textarea
                        name="extra"
                        value={formData.extra}
                        onChange={handleChange}/>
                </label>

                <label>
                    Pilna
                    <input
                        type="checkbox" name="urgency"
                        checked={formData.urgency}
                        onChange={() => setFormData({...formData, urgency: !formData.urgency})}>
                    </input>
                </label>
            </form>

            <button type="submit"> Wyślij dane</button>
        </div>
    )


}

export default Form
import * as React from "react";

interface Props {
    data: {
        name: string,
        reason: string,
        date: string,
        believability: number,
        creativity: string,
        extra: string,
        urgency: boolean
    }
}


const Child: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <h3>Twoje wymówki:</h3>
            <ul>
                <li>Nazwa: {data.name}</li>
                <li>Powód: {data.reason}</li>
                <li>Data zdarzenia: {data.date}</li>
                <li>Wiarygodność: {data.believability}/10</li>
                <li>Poziom kreatywności: {data.creativity}</li>
                <li>Dodatkowe szczegóły: {data.extra}</li>
                <li>Pilna: {data.urgency ? "Tak" : "Nie"}</li>
            </ul>
        </div>
    )
}

export default Child
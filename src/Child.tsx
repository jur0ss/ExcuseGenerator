import * as React from "react";
import { Wymowka } from "./Form";

interface Props {
    data: Wymowka[];
}

const Child: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <h3>Twoje wymówki:</h3>
            {data.map((item, index) => (
                <ul key={index}>
                    <li>Nazwa: {item.name}</li>
                    <li>Powód: {item.reason}</li>
                    <li>Data zdarzenia: {item.date}</li>
                    <li>Wiarygodność: {item.believability}/10</li>
                    <li>Poziom kreatywności: {item.creativity}</li>
                    <li>Dodatkowe szczegóły: {item.extra}</li>
                    <li>Pilna: {item.urgency ? "Tak" : "Nie"}</li>
                </ul>
            ))}
        </div>
    );
};

export default Child;
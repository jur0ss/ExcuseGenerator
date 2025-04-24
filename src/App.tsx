import { useState } from "react";
import "./App.css";
import Form, { Wymowka } from "./Form";
import Child from "./Child";

function App() {
    const [submittedData, setSubmittedData] = useState<Wymowka[]>([]);

    const handleFormSubmit = (data: Wymowka) => {
        setSubmittedData((prevData) => [...prevData, data]);
    };

    return (
        <>
            <Form onFormSubmit={handleFormSubmit} />
            {submittedData.length > 0 && <Child data={submittedData} />}
        </>
    );
}

export default App;
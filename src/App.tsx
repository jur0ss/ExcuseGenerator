import { useState } from "react";
import "./App.css";
import Form, { Wymowka } from "./Form";
import Child from "./Child";

function App() {
    const [submittedData, setSubmittedData] = useState<Wymowka[]>([]);

    const handleFormSubmit = (data: Wymowka) => {
        setSubmittedData((prevData) => [...prevData, data]);
    };

    let content = null;

    if (submittedData.length > 0) {
        content = <Child data={submittedData} />;
    }

    return (
        <>
            <Form onFormSubmit={handleFormSubmit} />
            {content}
        </>
    );
}

export default App;
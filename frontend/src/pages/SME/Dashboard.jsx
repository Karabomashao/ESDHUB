import { useState } from "react";

export default function Dashboard(){

    const [test, setSet] = useState("")
    fetch("http://localhost:5000")
        .then(res => res.text())
        .then(data => setSet(data));

    return(
        <h1>{test}</h1>
    )
}
import { useState } from "react";

function App(){
    const [aluno, setAluno] = useState<string>("");

    return (
        <>
            <h1>Exemplo 01</h1>
            <p>
                <b>Aluno </b> {aluno}
            </p>
            <button onClick={() => setAluno("Gabriel")}>Clique aqui!</button>
        </>
    )
}

export default App;
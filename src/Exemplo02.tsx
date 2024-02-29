import React, { useState } from "react";

interface FormData {
    name: string;
    email: string;
}

const Exemplo02: React.FC = () => {
    // Estado inicial do formulário
    const initialFormState: FormData = {
        name: '',
        email:'',
    };

// UseState para controlar o stado do formulário
const [formData, setFormData] = useState<FormData>(initialFormState);
const [submittedData, setSubmittedData] = useState<FormData | null>(null);


//Manipula a mudança do campos nos formulários
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

//Função para lidar com o envio do formulário
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData({...formData});

    setFormData(initialFormState);
};

    return (
        <>
            <h1>Exemplo02</h1>
            <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <br />
            <button type="submit">Enviar</button>
            </form>
            {submittedData && (
                <div>
                <p><b>Dados do formulário:</b></p>
                <p>Nome: {submittedData.name}</p>
                <p>Email: {submittedData.email}</p>
                </div>
            )}
        </>
    );
};

export default Exemplo02;
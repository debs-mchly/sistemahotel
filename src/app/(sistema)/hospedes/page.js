"use client"

import { useState } from "react"

export default function Clientes() {

  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")

  const [clientes, setClientes] = useState([])

  function cadastrarCliente(event) {
  event.preventDefault()

  const novoCliente = {
    id: Date.now(),
    nome: nome,
    cpf: cpf,
    telefone: telefone,
    email: email
  }

  setClientes([...clientes, novoCliente])
}

  return (
    <main>

    <h1>Cadastro de hóspedes</h1>
    
  <form onSubmit={cadastrarCliente}>

  <input
    type="text"
    placeholder="Nome"
    value={nome}
    onChange={(e) => setNome(e.target.value)}
  />

  <input
    type="text"
    placeholder="CPF"
    value={cpf}
    onChange={(e) => setCpf(e.target.value)}
  />

  <input
    type="text"
    placeholder="Telefone"
    value={telefone}
    onChange={(e) => setTelefone(e.target.value)}
  />

  <input
    type="email"
    placeholder="E-mail"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <button type="submit">
    Cadastrar
  </button>

</form>

<h2>Hóspedes cadastrados</h2>

{clientes.map((cliente) => (
  <div key={cliente.id}>

    <h3>{cliente.nome}</h3>

    <p>CPF: {cliente.cpf}</p>

    <p>Telefone: {cliente.telefone}</p>

    <p>E-mail: {cliente.email}</p>

  </div>
))}


    </main>
  )
}
import React from "react";
import ListaAlunos from "./components/ListaAlunos/ListaAlunos";

const App = () => {

    const aluno = 'Gabriel'
    const curso = 'ADS'
    const alunos = ['Alexandre', 'Ronqui', 'Fernando']

    const novoAluno = () => 'Ronqui'

    return(
        <div>
            <h1>Trabalhando com PROPS</h1>
            <p>Aluno: {aluno}</p>
            <p>Curso: {curso}</p>
            <ListaAlunos alunos ={alunos} 
            maisAluno={novoAluno}/>
        </div>

    )

}

export default App
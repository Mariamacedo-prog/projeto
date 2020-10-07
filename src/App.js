import React from 'react';


const Equipe = (props) =>{
    return (
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social facebook={props.facebook} Instagram={props.Instagram}/>
            <hr/>
        </div>
        )
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o(a) {props.nome} </h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
        </div>
    )
}

const Social = (props) => {
    return (
        <div>
            <a href={props.facebook}>Facebook </a>
            <a href={props.Instagram}>Instagram</a>
        </div>
    )
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe nome="Lucas" cargo="Programador" idade="29"
            facebook="https://www.facebook.com/" Instagram="https://www.instagram.com/?hl=pt-br"
            />
           
            <Equipe nome="Maria" cargo="Atendente" idade="24"  facebook="https://www.facebook.com/" Instagram="https://www.instagram.com/?hl=pt-br"/>
           
            <Equipe nome="Ana" cargo="Front-end" idade="25"  facebook="https://www.facebook.com/" Instagram="https://www.instagram.com/?hl=pt-br"/>
        </div>
    );

}

export default App;
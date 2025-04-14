import { useState , useEffect} from 'react'
import style from './Calcs.module.css'

export default function Calcs(){    
 const [n1, setN1] = useState()
 const [n2, setN2] = useState()
 const [respSoma, setRespSoma] = useState()
 const [respSub, setRespSub] = useState()
 const [respMult, setRespMult] = useState()
 const [respDiv, setRespDiv] = useState()
 
const somar = () => setRespSoma(parseFloat(n1) + parseFloat(n2))
const sub = () => setRespSub(parseFloat(n1) - parseFloat(n2))
const multi = () => setRespMult(parseFloat(n1) * parseFloat(n2))
const div = () => setRespDiv(parseFloat(n1) / parseFloat(n2))
const handleALL = (a,b) => {
    setRespSoma(parseFloat(a) + parseFloat(b))
    setRespSub(parseFloat(a) - parseFloat(b))
    setRespMult(parseFloat(a) * parseFloat(b))
    setRespDiv(parseFloat(a) / parseFloat(b))
}

useEffect(() => {
    setRespSoma(parseFloat(n1) + parseFloat(n2))
    setRespSub(parseFloat(n1) - parseFloat(n2))
    setRespMult(parseFloat(n1) * parseFloat(n2))
    setRespDiv(parseFloat(n1) / parseFloat(n2))
}, [n1, n2])


console.log(n1, n2)


    return(
        <>
            <h5><a href={"/"} className={style.backBtn}>voltar</a></h5>
            <h1>Calculo</h1>
            <br />
            <div>
                <h4>Digite os números para os calculos</h4>
                <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} placeholder='Primeiro número'/>
                <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} placeholder='Segundo número'/>
            </div>
            <div>
                <h4>Respostas</h4>
                <p>
                    <button onClick={somar}>Somar</button>
                    {!isNaN (respSoma) ? respSoma : "Digite um número válidos"}
                </p>
                <p>
                    <button onClick={sub}>Subtrair</button>
                    {!isNaN (respSub) ? respSub : "Digite um número válidos"}
                </p>
                <p>
                    <button onClick={multi}>Multiplicação</button>
                    {!isNaN (respMult) ? respMult : "Digite um número válidos"}
                </p>
                <p>
                    <button onClick={div}>Divisão</button>
                    {n2 == "0" ? "Erro ao dividir por 0"
                    : !isNaN(respDiv) && isFinite(respDiv) ? respDiv 
                    : "Digite números válidos"} 
                </p>
                <br />
                <button onClick={() => handleALL(n1,n2)}>Calcular todos</button>
                
            </div>
        </>
    )
}
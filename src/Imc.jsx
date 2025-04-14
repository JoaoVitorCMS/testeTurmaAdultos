import style from './Media.module.css'
import { useState} from 'react'

export default function Imc (){
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [respImc, setRespImc] = useState()

    const imc = () => setRespImc(parseFloat(n1)/(parseFloat(n2)*parseFloat(n2)))
    
    return( 
        <>
        <h5><a href={"/"} className={style.backBtn}>voltar</a></h5>
        <h1>Calculo do IMC</h1>
        <br />
        <div>
            <h4>Digite seu peso e sua altura:</h4>
            <input type="number" value={n1} onChange={(e) => setN1(e.target.value) } placeholder='Digite seu peso' />
             <br />
            <input type="number" value={n2} onChange={(e) => setN2(e.target.value) } placeholder='Digite sua altura'/>
        </div>
        <div>
            <h1>IMC</h1>
            <p>
                <button onClick={imc}>Calcular a imc</button>
                {!isNaN (respImc) ? respImc : ("Digite números invalidos") }
            </p>
        </div>

        </>
    )
}
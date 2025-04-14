import style from './Media.module.css'
import { useState} from 'react'


export default function Media(){
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [n3, setN3] = useState()
    const [n4, setN4] = useState()
    const [n5, setN5] = useState()
    const [respMedia, setRespMedia] = useState()

   
     const media = () => setRespMedia((parseFloat(n1) + parseFloat(n2) + parseFloat(n3)+ parseFloat(n4) + parseFloat(n5))/ 5)
       

    return(
        <>
        <h5><a href={"/"} className={style.backBtn}>voltar</a></h5>
        <h1>Calcular a Media</h1>
        <br />
        <div>
        <h4>Digite as notas</h4>
        <input type="number" value={n1} onChange={(e) => setN1(e.target.value) } placeholder='Digite sua primeira nota' />
        <br />
        <input type="number" value={n2} onChange={(e) => setN2(e.target.value) } placeholder='Digite sua segunda nota'/>
        <br />
        <input type="number" value={n3} onChange={(e) => setN3(e.target.value) } placeholder='Digite sua terceira nota'/>
        <br />
        <input type="number" value={n4} onChange={(e) => setN4(e.target.value) } placeholder='Digite sua quarta nota'/>
        <br />
        <input type="number" value={n5} onChange={(e) => setN5(e.target.value) } placeholder='Digite sua quinta nota'/>
        </div>
        <div>
            <h4>Media</h4>
            <p>
                    <button onClick={media}>calcular a media</button>
                    {!isNaN (respMedia) ? respMedia : "Digite um número válidos"}
                    <br />
                    {respMedia <= 7 ? "Reprovou" : "Aprovado"}
                </p>
        </div>
        </>
    )
}
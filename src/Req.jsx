import { useEffect, useState } from 'react'
import style from './Req.module.css'
import { apiRick } from './api/Api'
import { Card } from './components/card'
import ModalInfo from './components/modalinfo'
import Tilt from 'react-parallax-tilt'


export default function Req() {
   
    const [data, setData] = useState([])
    const [page, setPage] = useState([])
    const [erro, setErro] = useState(false)
    const [searchName, setSearchName] = useState("")
    const [modal, setModal] = useState()

    useEffect(() => {
      apiRick.get(`/character/?page=${page}&name=${searchName}`).then((res) =>{
        setData(res.data.results)
      }).catch((erro)=>{
        if(erro.response.status ===400){
            setErro(true)
        }
        console.log(erro)
        
      })
    
    
    }, [page, searchName])
    
    console.log(data)
    return (
      <>
      {modal !== undefined && <ModalInfo data={data[modal]} close = {() => setModal()}/>}
      <section className={style.wrapPage}>
            <h1>Rick and Morty API</h1>
            <input type="text" placeholder='Digite um pagina (1/42)' value={page} onChange={(e) => setPage(e.target.value)}/>
            <input type="text" placeholder='Digite um nome' value={searchName} onChange={(e) => setSearchName(e.target.value)} />
            {erro && <p>Pagina não encontrada</p>}
        
            <div className={style.wrapCards}>
            {data.map((item, index) => {
                return (
                    <div key={index} style={{display: "flex", flexDirection: "column", gap: "10px",padding: "10px" ,border: "2px solid Black" }}>
                      <Tilt>
                      <Card name={item.name} image={item.image}/>
                      </Tilt>
                       <button onClick={() => setModal(index)}>Info: {item.name}</button>
                    </div>    
                )
            })}
            </div>

        </section>
      </>      
    )
}
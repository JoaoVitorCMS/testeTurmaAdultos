import style from "./Contact.module.css"
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Menu } from "./components/menu";
import { Loading } from "./components/spinner.jsx";
import {useState, useEffect} from "react";

function contact (){
    const [cep, setCep] = useState("80510070")
    const [lat, setLat] = useState("-25.4248289")
    const [lng, setLng] = useState ("-49.354861")

    const [loading, setLoading] = useState(false)
    const [bairro, setBairro] = useState("")
    const [rua, setRua] = useState("")
    const [estado, setEstado] = useState("")
    const [pais, setPais] = useState("")
    const [localidade, setLocalidade] = useState("")
    const position = [lat, lng]
    
   function handleCep(e){
    setCep(e.target.value)
   }

   function ChangeView({center}){
    const map = useMap();
    map.setView(center, 15)
    return null
   }

   useEffect(() => {
    const sanitizedCep = cep.replace(/\D/g, "")
    if(sanitizedCep.length !== 8) return;
    
    setLoading(true)

      fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`)
      .then((res) => res.json())
      .then((data) => {

        if(data.erro){
          console.warn("CEP não encontrado");
          setLoading(false)
          return;
        }

        const {logradouro, localidade, uf, bairro, estado } = data;
        setBairro(bairro)
        setRua(logradouro)
        setEstado(estado)
        setLocalidade(localidade)
        const address = `${logradouro ? logradouro + ', ': ''}${localidade}, ${uf}`

        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
        .then((response) => response.json())
        .then((locationData) =>{
         if(locationData.length >0){
          const{lat, lon} = locationData[0]
          setLat(parseFloat(lat))
          setLng(parseFloat(lon))
         }else{
          console.warn("Coordenadas não encontradas")
         } 
        }).catch(error => {
          console.error("Erro ao buscar coordenadas", error)
        })
        setLoading(false)
      }).catch(error =>{
        console.error("erro ao buscar Cep: ",error)
      } )
  }, [cep])



    return(
        <>
        <Menu option01="voltar a pagina inicial"/>
        
        <h1 className={style.FRUTA}>Qualquer</h1>
        <br />
        <input type="text" placeholder="Inseira o CEP" onChange={handleCep}/>
        {bairro} - {rua} - {estado} - {localidade}  

        <br />
        <br />
        {loading ? <Loading/>:
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "70vh"}}>
        <ChangeView center={position}/>
        <TileLayer
        
    //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      
     />
     
     
     <Marker position={position}>
      <Popup>
        
        <a
        target="blanck" 
        rel="noopener noreferrer"
        href="https://www.google.com/maps/search/?api="> Abrir no Google Maps</a>
         </Popup>
     </Marker>
     </MapContainer>
}
      </>
    )
}

export default contact
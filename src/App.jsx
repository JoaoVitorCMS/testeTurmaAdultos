
// import style from "./App.module.css"
import { Menu } from "./components/menu"
// import img01 from "./assets/images/img01.jfif"
import { cards } from "./assets/mock/cards"
import { useState } from "react";

function App() {

 const defaultPhoneNumber = "554199999999";
 const  [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
 });

const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData({...formData, [name]: value})
}

const handleZap = () => {
  const {name, email, message} = formData

  const URLzap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}%text=
  Nome:%20${name}%0D%0A
  Email:%20${email}%0D%0A
  Mensagem:%20${message}%0D%0A`

  window.open(URLzap, "_blank")
  
}
  return (
    <>
     <Menu option01='sessão 01' option02='sessão 02' option03='Contato' option04= 'calcs'></Menu>
     <main>
      <section id="s1">
        <h2>sessao 1</h2>
        {/* <img src={img01} alt="coisa linda" /> */}
        {cards.map((item, index) => {
          return(
            <div key={index}>
              <h5>{item.text}</h5>
              <p>{item.maiscoisa}</p>
              <img src={item.img} alt={item.text} width={200} height={"auto"}/>
            </div>
          )
        })}
      </section>
      <section id="s2">
        <h2>Contato</h2>
        <br />
        <input placeholder="insira seu nome: " type="text" id='name' name="name" value={formData.name} onChange={handleChange} required />
        <input placeholder="insira seu email: " type="text" id="email" name="email" value={formData.email} onChange={handleChange} required/>
        <textarea placeholder="insira seu message: "  id="message" name="message" value={formData.message} onChange={handleChange} cols={30} rows={10} required></textarea>
        <button onClick={handleZap}>eNVIAR MENSAGEM</button>
      </section>
      <section id="s3">
        <h2>sessao3</h2>
      </section>
     </main>
    </>
  )
}

export default App

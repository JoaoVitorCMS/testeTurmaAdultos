import style from "./Card.module.css"

export const Card = ({name, image}) => {
    return(
        <>
        <h5 className={style.titleName}>{name}</h5>
        <img className={style.imgstyle} src={image} alt={name}/>
        </>
    )
}
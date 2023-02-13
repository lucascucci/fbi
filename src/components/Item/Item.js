

const Item = ({data}) => {


    return (
        <div className="prueba">
            <h1>{data.title}</h1>
            <img src={data.images[0].original} alt='foto'/>
            <h2 className="titulo">Wanted for :{data.caution}</h2>
            
        </div>
    )

}

export default Item;

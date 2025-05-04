
function PokemonCard({
    name,
    ...props 
}) {
  return (
    <div className="card" style={{width: "18rem"}}>
   <img src={props?.sprites?.back_default} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name: {name} </h5>
    <p className="card-text">Types: {props.Types.join(',')}</p>
    <p className="card-text">Id: {props.id}</p>
  </div>
</div>
  )
}

export default PokemonCard
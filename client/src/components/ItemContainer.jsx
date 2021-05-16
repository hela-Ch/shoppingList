

const ItemContainer= ({items,change}) => {
    return (
        <ul className="itemList">
        
        {items.map((item) => {


        return <li key={item._id}> {item.name} <img src="https://img.icons8.com/flat-round/64/000000/delete-sign.png" alt="delete" onClick={()=>change (item._id)}/></li>
        
        })}
        </ul>
         
    )
}









export default ItemContainer;
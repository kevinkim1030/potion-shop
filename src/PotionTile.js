import React from 'react'
const PotionTile = (props) => {
    let inStore
    props.sell ? inStore = true : inStore = false
    return (
      <div key={props.potion.id} className={inStore === false ? "card" : "inventory-card"}>
        {inStore === false ? 
        <div onClick={() => props.addToInventory(props.potion.id)} className="image-wrapper">
          <img className="image" alt={props.potion.name} src={props.potion.image_url} />
        </div>
        :
        <div onClick={() => props.sell(props.potion.id)} className="image-wrapper">
          <img className="image" alt={props.potion.name} src={props.potion.image_url} />
        </div>}
        {props.children}
      </div>
    )
}

export default PotionTile
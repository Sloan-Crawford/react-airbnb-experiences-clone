import CardProps from "./CardProps"
import data from "../data/items"
import React from "react"

// export default function Card() {

//  const expElements = data.map(exp => CardProps(exp))
//  return expElements
// }

export default function Card(): JSX.Element {
 return <> {
  data.map(exp => [CardProps(exp)])
 }</>
 
}

import CardProps from "./CardProps"
import data from "../data/items"

export default function Card() {

 const expElements = data.map(exp => CardProps(exp))
 return expElements
}
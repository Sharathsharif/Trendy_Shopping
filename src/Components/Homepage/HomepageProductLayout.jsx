
import '../CSS/Home.css'



export default function HomepageProductLayout (props){
return(
    <div className="HomepageProductLayout">
    <img src={props.image} alt={props.title} className='HomepageProductLayout_img'/>
    <h3>{props.title}</h3>
    <h4>{props.price}</h4>
    </div>
)
}
import Partyshirt1 from '../../assets/Image/Mens/Mens_Party-Dress.jpg'
import '../CSS/Home.css'


export default function HomePageMensList() {
  return (
    <>
    <br /><br /><br />
    <h2>Hot Mens Deals !!!</h2>
    <div className="HomePageMensList">
      <img src={Partyshirt1} alt="Mensdress" className='Homeproductcontainer_img' />
      <div className='name-price'>
      <h3>Part wear shirt</h3>
      <h4>₹ 999 only</h4>
        
      </div>
    </div>
    </>
  );
}

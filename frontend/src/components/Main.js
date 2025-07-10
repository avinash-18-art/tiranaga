import React from 'react';
import './Main.css';
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineSound } from "react-icons/ai";
import { TbRating18Plus } from "react-icons/tb";
import { GrLanguage } from "react-icons/gr";
import { TfiAnnouncement } from "react-icons/tfi";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { SiBlockchaindotcom } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { VscLayoutActivitybarRight } from "react-icons/vsc";
import { IoDiamondOutline } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className='new'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413184823pcfs.png"
            alt="First slide"
          />
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413184012f1tp.png"
            alt="Second slide"
          />
      
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413185743hrht.png"
            alt="Third slide"
          />
         
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413185757jact.png"
            alt="Third slide"
          />
         
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240412140444pw4u.jpg"
            alt="Third slide"
          />
         
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_202404291749141284.png"
            alt="Third slide"
          />
         
        </Carousel.Item>

         <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240412205537ud4o.png"
            alt="Third slide"
          />
         
        </Carousel.Item>

         <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240412162448bp61.png"
            alt="Third slide"
          />
         
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240525203625opd7.png"
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
   <div className="round">
    <p className="paragraph"><AiOutlineSound className="icon" />
        Welcome to the Tiranga Games! Greetings, Gamers and Enthusiasts! The Tiranga Games is more than just a platform  for gaming.<br/> 
        We invite <button className='details'>Details</button> you to join us — you'll find a variety of games,  promos, bonuses, luxury gold awards. Register now and win!<br/>
    </p>
    </div>
   <div className='wrap'>
  <div className="card-container">
  <div className="blue-card">
    <img
      className="unique-icon"
      src="https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221154444kutg.png"
      alt="Trophy"
    />
    <p className='popular'>Popular</p>
  </div>

   <div className="pink-card">
    <img
      className="trophy-icon"
      src="https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221154540veqj.png"
      alt="Trophy"
    />
    <p className='popular'>Lottery</p>
  </div>
</div>

<div className='card-container'>
   <div className="mix-card">
    <img
      className="trophy-icon"
      src="https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240529195514q4uq.png"
      alt="Trophy"
    />
    <p className='popular'>Casino</p>
  </div>

   <div className="orange-card">
    <img
      className="trophy-icon"
      src="https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221154558lshk.png"
      alt="Trophy"
    />
    <p className='popular'>Slots</p>
  </div>

   <div className="mix-card">
    <img
      className="trophy-icon"
      src="https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221154454akso.png"
      alt="Trophy"
    />
    <p className='popular'>Sports</p>
  </div>

</div>

   <div className="card-container">

     <div className="mix-card">
    <img
      className="trophy-icon"
      src="https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_202404151616441889.png"
      alt="Trophy"
    />
    <p className='popular'>Rummy</p>
  </div>

   <div className="mix-card">
    <img
      className="trophy-icon"
      src="https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221164829vcfa.png"
      alt="Trophy"
    />
    <p className='popular'>Fishing</p>
  </div>

   <div className="mix-card">
    <img
      className="trophy-icon"
      src="https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240415161436vabi.png"
      alt="Trophy"
    />
    <p className='popular'>Original</p>
  </div>

  
</div>
</div> 

<div  className='wrap'>
<h4 className='originals'>Lottery</h4>
<div className='lottry'>
<div className='card2'>
<p>Win Go</p>
<Link to="/Go"><img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/lotterycategory/lotterycategory_20240124125544jt65.png'/></Link>
</div>

<div className='card2'>
<p>K3</p>
<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/lotterycategory/lotterycategory_20240124125551se9i.png'/>
</div>

<div className='card2'>
<p>5D</p>
<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/lotterycategory/lotterycategory_20240124125558slo1.png'/>
</div>
</div>

<div className='lottry'>

<div className='card2'>
<p>Trx Win Go</p>
<Link to="/Go"><img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/lotterycategory/lotterycategory_20240124125606db4a.png'/></Link>
</div>

<div className='card2'>
<p>MotorRace</p>
<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/lotterycategory/lotterycategory_20250506194940kxmj.png'/>
</div>

<div className='card2'>
<p>Video Win Go</p>
<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/lotterycategory/lotterycategory_202506231455472afh.png'/>
</div>


</div>
</div>




<div className='wrap'>
<h4 className='originals'>Originals</h4>
<div className='lottry'>

<div className='play'>

<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/gamelogo/TB_Chess/800.png'/>
</div>

<div className='play'>

<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/gamelogo/TB_Chess/103.png'/>
</div>

<div className='play'>

<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/gamelogo/TB_Chess/110.png'/>
</div>
</div>


<div className='lottry'>

<div className='play'>

<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/gamelogo/SPRIBE/22001.png'/>
</div>

<div className='play'>

<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/gamelogo/SPRIBE/22004.png'/>
</div>

<div className='play'>

<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/gamelogo/SPRIBE/22005.png'/>
</div>
</div>
</div>







<div className='wrap'>
<h4 className='originals'>Platform recommendation</h4>

<div className='lottry'>

<div className='play'>

<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/gamelogo/TB_Chess/800.png'/>
</div>

<div className='play'>

<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/gamelogo/SPRIBE/22001.png'/>
</div>

<div className='play'>

<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/gamelogo/PG/98.png'/>
</div>
</div>


<div className='lottry'>

<div className='play'>

<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/gamelogo/JILI/1.png'/>
</div>

<div className='play'>

<img className="win-go" src='https://ossimg.tirangaagent.com/Tiranga/gamelogo/JILI/100.png'/>
</div>

<div className='play'>

<img className="win-go" src="https://ossimg.tirangaagent.com/Tiranga/gamelogo/PG/1543462.png"/>
</div>
</div>
</div>


<div className='wrap'>
<h4 className='originals'>Slots</h4>
<div className='lottry'>

<div className='card3'>
<Link to="/Jili"><img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20231026190224r2r8.png" /></Link>
</div>

<div className='card3'>
<Link to="/Pg"><img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20231026184337uvl1.png" /></Link>
</div>



<div className='card3'>
<Link to="/Game"><img className="img5"src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20250609115513sngl.png" /></Link>
</div>
</div>

<div className='lottry'>

<div className='card3'>
<Link to="/SmallGame"><img className="img5"src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20231026190434t4n2.png" /></Link>
</div>

<div className='card3'>
<Link to="/HotGame"><img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20231026190401r1ys.png" /></Link>
</div>

<div className='card3'>
<Link to="/Evolution"><img className="img5"src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20231026190216pu1u.png" /></Link>
</div>
</div>
</div>

<div className='wrap'>
<h4 className='originals'>Sports</h4>
<div className='sports'>
<img  className='play' src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20240814202959vsy1.png"/>  
<img  className='play' src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20240814202814ql4p.png"/>
</div>
</div>

<div className='wrap'>
<h4 className='originals'>Casino</h4>
<div className='lottry'>

<div>
<img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/gamelogo/EVO_Video/CrazyTime0000001.png" />
</div>

<div>
<img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/gamelogo/EVO_Video/DragonTiger00001.png" />
</div>



<div>
<img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/gamelogo/EVO_Video/AmericanTable001.png" />
</div>
</div>

<div className='lottry'>

<div>
<img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/gamelogo/EVO_Video/AndarBahar000001.png" />
</div>

<div>
<img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/gamelogo/EVO_Video/48z5pjps3ntvqc1b.png" />
</div>

<div>
<img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/gamelogo/EVO_Video/SuperSicBo000001.png" />
</div>
</div>
</div>

<div className='wrap'>
<h4 className='originals'>Fishing</h4>
<div className='lottry'>

<div>
<img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/gamelogo/JILI/1.png" />
</div>

<div>
<img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/gamelogo/JILI/119.png" />
</div>



<div>
<img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/gamelogo/JILI/20.png" />
</div>
</div>

<div className='lottry'>

<div>
<img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/gamelogo/JILI/212.png" />
</div>

<div>
<img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/gamelogo/JILI/32.png" />
</div>

<div>
<img className="img4"src="https://ossimg.tirangaagent.com/Tiranga/gamelogo/JILI/42.png" />
</div>
</div>
</div>

<div className='wrap'>
<h4 className='originals'>Rummy</h4>
<div className='rummy'>
<Link to="/Poker"><img className="img4" src='https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20240814202752omb3.png'/></Link>

</div>
</div>

<div className='wrap'>
<h4 className='originals'>Winning Information :</h4>
<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/14-a397ff6b.png"/> Mem**TGU</h4>
<h4 className='mem'><img  className="img-round" src="https://ossimg.tirangaagent.com/Tiranga/lotterycategory/lotterycategory_20240124125544jt65.png"/> Recived Amount 50 </h4>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/1-a6662edb.png"/> Mem**TFU</h4>
<h4 className='mem'><img  className="img-round" src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20240814202752omb3.png"/> Recived Amount 234 </h4>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/12-ae12c679.png"/> Mem**AQG</h4>
<h4 className='mem'><img  className="img-round" src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20240814202653h8ok.png"/> Recived Amount 210 </h4>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/15-80f41fc6.png"/> Mem**ETP</h4>
<h4 className='mem'><img  className="img-round" src="https://ossimg.tirangaagent.com/Tiranga/lotterycategory/lotterycategory_20240124125544jt65.png"/> Recived Amount 240 </h4>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/18-52955242.png"/> Mem**ELP</h4>
<h4 className='mem'><img  className="img-round" src="https://ossimg.tirangaagent.com/Tiranga/lotterycategory/lotterycategory_20240124125544jt65.png"/> Recived Amount 40 </h4>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/15-80f41fc6.png"/> Mem**ETP</h4>
<h4 className='mem'><img  className="img-round" src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20231026190224r2r8.png"/> Recived Amount 98.50 </h4>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/13-5676d43f.png"/> Mem**GMN</h4>
<h4 className='mem'><img  className="img-round" src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20240814202959vsy1.png"/> Recived Amount 210 </h4>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/8-ea087ede.png"/> Mem**GLO</h4>
<h4 className='mem'><img  className="img-round" src="https://ossimg.tirangaagent.com/Tiranga/lotterycategory/lotterycategory_20240124125558slo1.png"/> Recived Amount 210 </h4>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/5-ab77b716.png"/> Mem**TGU</h4>
<h4 className='mem'><img  className="img-round" src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20240814202734g5q6.png"/> Recived Amount 410 </h4>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/17-bedde42f.png"/> Mem**PNG</h4>
<h4 className='mem'><img  className="img-round" src="https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20231026184337uvl1.png"/> Recived Amount 210 </h4>
</div>
</div>
</div>

<div className='wrap'>
<h4 className='originals'>Todays earning Chats</h4>
<div className='new-arrange'>
  <div className='cardss1'>
  <div className='coupan'>
  <img className="box" src='https://www.tirangagame.top/assets/png/1-a6662edb.png'/>  
  <p className='pr-arrange'>No 2</p>
  <p className='pr-arrange'>Mem***AGK</p>
  <p className='pr-arrange'>2,15,60000.00 RS</p>
  </div> 
  </div>

   <div className='cardss1'>
  <div className='coupan'>
  <img className="box" src='https://tgdream12.com/assets/png/6-7c7f5203.png'/>  
  <p className='pr-arrange'>No 1</p>
  <p className='pr-arrange'>Mem***SXl</p>
  <p className='pr-arrange'>6,31,50000.00 RS</p>
  </div>
  </div>

  <div className='cardss1'>
  <div className='coupan'>
  <img className="box" src='https://tgdream12.com/assets/png/7-00479cfa.png'/>  
  <p className='pr-arrange'>No 3</p>
  <p className='pr-arrange'>Mem***GPL</p>
  <p className='pr-arrange'>1,91,0000.00 RS</p>
 </div>
 </div> 
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/14-a397ff6b.png"/> Mem**TGU</h4>
<button className='details2'>1,20,60000</button>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/1-a6662edb.png"/> Mem**TFU</h4>
<button className='details2'>2,60,5000</button>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/14-a397ff6b.png"/> Mem**TGU</h4>
<button className='details2'>3,60,50000</button>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/1-a6662edb.png"/> Mem**TFU</h4>
<button className='details2'>1,20,60000</button>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/14-a397ff6b.png"/> Mem**TGU</h4>
<button className='details2'>2,60,000</button>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/1-a6662edb.png"/> Mem**TFU</h4>
<button className='details2'>4,50,000</button>
</div>
</div>

<div className='round2'>
<div className='flex'>  
<h4 className='mem'><img  className="img-round" src="https://tgdream11.com/assets/png/14-a397ff6b.png"/> Mem**TGU</h4>
<button className='details2'>2,60,000</button>
</div>
</div>


<div className='background-arrange'>
<div className='bgmi'>
  <div className='trinaga-logo'>
  <img className="logo" src="https://ossimg.tirangaagent.com/Tiranga/other/h5setting_20231018190159b8rt.png"/>
  < TbRating18Plus className='eighteen' />
  </div>

  <div className='logo-manage'>
  <div className="low-gap">
  <img className="img-set"src="/logo.svg"/>
  <img className="img-set" src="/logo2.svg"/>
  <img className="img-set" src='/logo3.svg'/>
  </div>
  </div>

  <div className='logo-manage'>
  <div className="low-gap-next">
    <img className="img-set" src='/logo4.svg'/>
    <img  className="img-set" src='/logo5.svg'/>
    <img className="img-set" src='/logo6.svg'/>
  </div>
  </div>

  <p className='umberella'>
  The platform advocates fairness, justice, and openness. We mainly operate fair lottery, blockchain games, live casinos, and slot machine games.
</p>
<p className='umberella'>
  Tiranga works with more than 10,000 online live game dealers and slot games, all of which are verified fair games.
</p>
<p className='umberella'>
  Tiranga supports fast deposit and withdrawal, and looks forward to your visit.
</p>
<p className='red'>
  Gambling can be addictive, please play rationally.
</p>
<p className='red'>
  Tiranga only accepts customers above the age of 18.
</p>

</div>
</div>

<div className='background-arrange'>
<div className='bgmi2'>
  <Link className='set' to="/Language"><h4 className='Language'><GrLanguage /> Language      </h4></Link>
  <Link className='set' to="/Add"><h4 className='Language'><TfiAnnouncement /> Annoucement</h4></Link>
  <Link className='set' to="/Customer"><h4 className='Language'><RiCustomerService2Line /> 24/7 Customer Service</h4></Link>
  <Link  className='set' to="/Begginer"><h4 className='Language'><IoBookSharp /> Beginners Guide</h4></Link>
   <Link className='set' to="/About"><h4 className='Language'><SiBlockchaindotcom /> About Us</h4></Link>
   <Link className='set' to="/Download"><h4 className='Language'><IoMdDownload /> Download App</h4></Link>
</div>
</div>

<div className='footer'>
 <div className='home'> 
<IoIosHome />
<p>Home</p>
</div>

 <div className='home'> 
<Link  to="/Activity"><VscLayoutActivitybarRight /></Link>
<p>Activity</p>
</div>

 <div className='home'> 
<Link to="/Agency"><IoDiamondOutline /></Link>
<p>Pramotion</p>
</div>

 <div className='home'> 
<Link to="/Wallet"><FaWallet /></Link>
<p className='set'>Wallet</p>
</div>

<div className='home'> 
<Link to="/Account"><MdAccountCircle /></Link>
<p className='set'>Account</p>
</div>
</div>

    </div>
  );
}

export default Main;

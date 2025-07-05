import React from 'react';
import './Jili.css';

function Jili() {
  return (
    <div className='jili-wrap'>
      {/* Navbar */}
      <div className='jili-navbar'>
        <h1 className='jili-heading'>Jili Games</h1>
      </div>

      {/* Main Content */}
      <div className='jili-main'>
        {[
          ["229.png", "Mines"],
          ["224.png", "Go Rush"],
          ["236.png", "Wheel"],
          ["51.png", "Money Coming"],
          ["197.png", "Color Game"],
          ["1.png", "Royal Fishing"],
          ["100.png", "Super Rich"],
          ["200.png", "Pappu"],
          ["223.png", "Fortune Gems"],
          ["109.png", "Fortune Gems"],
          ["232.png", "Tower"],
          ["32.png", "Jack Pot Fishing"],
          ["235.png", "Limbo"],
          ["49.png", "Super Ace"],
          ["233.png", "HILIO"],
          ["42.png", "Dinosaur Tycoon"],
          ["119.png", "All-star fishing"],
          ["20.png", "Bombing Fishing"],
          ["82.png", "Happy Fishing"],
          ["35.png", "Crazy777"],
          ["212.png", "Dinosour"],
          ["74.png", "Mega Fishing"],
          ["71.png", "Boom Legend"],
          ["47.png", "Charge Buffalo"],
          ["27.png", "seven seven seven"],
          ["103.png", "Golden Empire"],
          ["77.png", "Boxing"],
          ["45.png", "Golden bank"],
          ["60.png", "Dragon Fortune"],
          ["134.png", "Mega Ace"],
          ["48.png", "Lucky Goldbricks"],
          ["110.png", "Ali Baba"],
          ["91.png", "Lucky Coming"],
          ["16.png", "Jungle King"],
          ["87.png", "Book Gold"],
          ["6.png", "Fortune Tree"],
          ["144.png", "Jili Cashein"],
          ["181.png", "Wild Ace"],
          ["106.png", "Twins Wins"],
          ["137.png", "Gold Rush"],
          ["101.png", "Medusa"],
          ["116.png", "Happy Taxi"],
          ["126.png", "Bone Fortune"],
          ["23.png", "Candy Baby"],
          ["146.png", "World cup"],
          ["135.png", "Mayan Empire"],
          ["108.png", "Magic Lamp"],
          ["85.png", "Paroha Treasur"]
        ].reduce((rows, [img, title], index) => {
          const rowIndex = Math.floor(index / 3);
          if (!rows[rowIndex]) rows[rowIndex] = [];
          rows[rowIndex].push({ img, title });
          return rows;
        }, []).map((row, i) => (
          <div key={i} className='jili-img-control'>
            {row.map((game, j) => (
              <div key={j}>
                <img
                  className='jili-png'
                  src={`https://ossimg.tirangaagent.com/Tiranga/gamelogo/JILI/${game.img}`}
                  alt={game.title}
                />
                <p>{game.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jili;

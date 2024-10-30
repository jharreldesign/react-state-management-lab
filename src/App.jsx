import { useState } from "react";
import ZombieFighter from "./components/ZombieFighter/ZombieFighter";

import "./app.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F59%2F65%2F9a%2F59659aaa84ed758fa4f7ef35b497fe7e.png&f=1&nofb=1&ipt=e54c76b0d510bc63e13c850552ff5fa09c894f253280b96e17717aae87c3a36c&ipo=images",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0747%2F3829%2Fproducts%2FmQ0359_c00031be-6368-4973-8c25-5172a19fc4ec_1024x1024.jpg%3Fv%3D1571444623&f=1&nofb=1&ipt=e92d0e1e5a916df62ae9356e0f3b85fb4c20aeaa5753d79fbbf6043de19025cf&ipo=images",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F670-6703067_8-bit-video-game-character-hd-png-download.png&f=1&nofb=1&ipt=7e549eb70628a94672cc7c22c70a66c0611204aff949d7866f71013b36ac5952&ipo=images",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2023%2F01%2F21%2F12%2F23%2Fcharacter-7733757_1280.png&f=1&nofb=1&ipt=59470119828dd18d45b30a8f68f61a1b39cc7529489bf1f66d859d2723e8ffbc&ipo=images",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F499-4995040_2d-video-game-characters-clipart-png-download-8.png&f=1&nofb=1&ipt=bbca133b6ae1604ff5548a134b0a0c13cf09341176d89b71f4bffbaacab6eac9&ipo=images",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F576%2F110%2Fpng-clipart-16-bit-desktop-pixel-art-8-bit-256bit-fictional-character-games.png&f=1&nofb=1&ipt=ebd6adf24c6f3e68facb4d7158885a7b908de7b245647b890d6ea8952d1c7471&ipo=images",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F339-3397775_8-bit-video-game-character.png&f=1&nofb=1&ipt=edf73414a8c7cf8cd9923d039b08647d88c504c5421546281ce623a87601ff4c&ipo=images",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmallimg.pngkey.com%2Fpng%2Fsmall%2F354-3549617_employing-8-bit-graphics-and-sound-that-hark.png&f=1&nofb=1&ipt=cf5fc786d0e8d274468b84a03fad9ff2ffdb948dfc650e10c227bf5d93945147&ipo=images",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftoppng.com%2Fuploads%2Fpreview%2Favgn-adventures-avgn-sprite-8-bit-character-11562948204jg8rw7kvl1.png&f=1&nofb=1&ipt=3eff89806ca9d6d69bce52521efd0190bdcac8f77b4807d6e952b1e159eff9d4&ipo=images",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zZP9qBDrC6ZIngYd5nMJ7wHaIh%26pid%3DApi&f=1&ipt=69534cb7b9f0af8ee49c6bc5b1ec9f12787345b0ebec6535d139f90d91ecfb3e&ipo=images",
    },
  ]);

  const handleTotalAgility = (team) =>
    team.reduce((accumulator, fighter) => accumulator + fighter.agility, 0);
  const handleTotalStrength = (team) =>
    team.reduce((accumulator, fighter) => accumulator + fighter.strength, 0);

  const handleAddFighter = (character) => {
    if (money >= character.price) {
      const newTeam = [...team, character];
      setTeam(newTeam);
      setMoney(money - character.price);
      setTotalStrength(handleTotalStrength(newTeam));
      setTotalAgility(handleTotalAgility(newTeam));
    } else {
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (character) => {
    const updatedTeam = team.filter(
      (fighter) => fighter.name !== character.name
    );
    setTeam(updatedTeam);
    setMoney(money + character.price);
    setTotalStrength(handleTotalStrength(updatedTeam));
    setTotalAgility(handleTotalAgility(updatedTeam));
  };

  const sortedZombieFighters = [...zombieFighters].sort((a, b) => a.price - b.price);


  return (
    <>
      <h2>Money: ${money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>

      <div className="team-section">
        <h3>Your Team</h3>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <ul>
            {team.map((fighter, idx) => (
              <li key={idx}>
                <img src={fighter.img} alt={fighter.name} />
                <h3>{fighter.name}</h3>
                <p>Price: {fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFighter(fighter)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <h3>Available Fighters</h3>
      <ul>
        {sortedZombieFighters.map((zombie, idx) => (
          <ZombieFighter
            key={idx}
            fighter={zombie}
            onAdd={() => handleAddFighter(zombie)}
          />
        ))}
      </ul>
    </>
  );
};

export default App;

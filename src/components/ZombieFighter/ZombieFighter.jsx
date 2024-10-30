const ZombieFighter = ({ fighter, onAdd }) => {
    return (
      <li className="fighter-card">
        <img src={fighter.img} alt={fighter.name} />
        <div className="fighter-info">
          <h3>{fighter.name}</h3>
          <p>Price: ${fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
        </div>
        <button onClick={onAdd}>Add to Team</button>
      </li>
    );
  };
  
  export default ZombieFighter;
  
import "./App.css";

function InputObject() {
  return (
    <div className="main-container">
      <input type="number" placeholder="Distance" pattern="[0-9]*" />
      <select>
        <option>m</option>
        <option>ft</option>
        <option>km</option>
        <option>miles</option>
      </select>
      <p>→</p>
      <input type="number" pattern="[0-9]*" />
      <select>
        <option>m</option>
        <option>ft</option>
        <option>km</option>
        <option>miles</option>
      </select>
    </div>
  );
}

export default InputObject;

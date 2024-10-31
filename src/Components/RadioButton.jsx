const RadioButton = ({ handleChange, id, title, name, color, value }) => {
  return (
    <label htmlFor={id} className="sidebar-label-container">
      <input
        id={id}
        type="radio"
        onChange={handleChange}
        name={name}
        value={value}
        className="radio"
      />
      <span className="checkmark" style={{ background: color }}></span>
      {title}
    </label>
  );
};

export default RadioButton;

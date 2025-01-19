import './buttonCounter.css';

const ButtonCounter = ({
  label,
  onClick,
  size,
  backgroundColor,
  buttonStyleVersion,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={[buttonStyleVersion, `counter-button--${size}`].join(' ')}
        style={backgroundColor && { backgroundColor }}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonCounter;

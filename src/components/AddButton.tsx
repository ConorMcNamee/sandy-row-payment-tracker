import { h } from 'preact';

const AddButton = ({ onClick }) => {
  const style = {
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50px',
      height: '50px',
      borderRadius: '25px',
      background: '#f0f0f0',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
    },
    plusSign: {
      fontSize: '24px',
      color: '#333',
    }
  };

  return (
    <div style={style.button} onClick={onClick}>
      <span style={style.plusSign}>+</span>
    </div>
  );
};

export default AddButton;

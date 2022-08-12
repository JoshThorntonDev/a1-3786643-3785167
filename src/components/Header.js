import './Header.css'
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div className='header'>
      <h1>Header :)</h1>

      <Button variant="primary">Login</Button>
    </div>
  );
}

export default Header;

import StyledHeader from './Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src='/logo.svg' alt='' />
      </div>
      <button>ACCUEIL</button>
      <button>RECHERCHE</button>
    </StyledHeader>
  );
};
export default Header;

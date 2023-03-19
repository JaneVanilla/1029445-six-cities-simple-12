import Logo from '../logo/logo';

type HeaderType = {
  navigation?: JSX.Element;
}

export default function Header({navigation}:HeaderType) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          {navigation}
        </div>
      </div>
    </header>
  );
}

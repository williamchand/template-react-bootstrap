import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import './index.css';

function Header() {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const handleLanguage = (language) => i18n.changeLanguage(language);

  return (
    <div className="header">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/home">{t('header.logo')}</Navbar.Brand>
        <Nav className="mr-auto" activeKey={history.location.pathname}>
          <LinkContainer to="/home"><Nav.Link href="/home">{t('header.home')}</Nav.Link></LinkContainer>
          <LinkContainer to="/search"><Nav.Link href="/search">{t('header.search')}</Nav.Link></LinkContainer>
        </Nav>
        <NavDropdown className="language ml-auto" title={i18n.language.toUpperCase()} id="nav-dropdown" onSelect={handleLanguage} alignRight>
          <NavDropdown.Item eventKey="id">ID</NavDropdown.Item>
          <NavDropdown.Item eventKey="en">EN</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </div>
  );
}

export default Header;
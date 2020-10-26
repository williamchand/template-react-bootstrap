# Template React Bootstrap [![Netlify Status](https://api.netlify.com/api/v1/badges/c87ca310-3b6e-4786-8746-d8219bd2cc6f/deploy-status)](https://app.netlify.com/sites/awesome-brattain-372325/deploys)
Template React Bootstrap adalah suatu kerangka kerja integrasi react dengan Bootstrap untuk membantu pemula mulai mempelajari aplikasi web melalui tutorial paling dasar.

## Gambaran
Pada tutorial kali ini, kita akan membuat aplikasi web yang menampilkan daftar film menggunakan API OMDb. Aplikasi ini akan dapat menerima input kata kunci dan  merespon dengan menampilkan film yang sesuai dengan kata kunci. Hal utama yang akan kita jelajahi adalah bagaimana caranya:
- Membuat aplikasi satu halaman.
- Membuat halaman banyak bahasa.
- Interaksi antara react dengan API.

## Prasyarat
- Unduh dan instal Node v8.10+, npm v5.6+ and Yarn v1.2.0+.
- Unduh dan instal JDK.
- Unduh dan instal Visual Studio Code.
- Membuat akun github.
- Membuat akun netlify.

### Create React App
Project ini menggunakan dasar dari [Create React App](https://github.com/facebook/create-react-app).

`npx create-react-app template-react-bootstrap`

### React-i18next
[React-i18next](https://react.i18next.com/) adalah kerangka internasionalisasi bahasa yang terbaik untuk React / React Native yang didasarkan pada i18next.

`yarn add react-i18next i18next i18next-http-backend i18next-browser-languagedetector`

### React Router
Perutean URL deklaratif menggunakan [React Router](https://reactrouter.com/).

`yarn add react-router react-router-dom`

### React Bootstrap
React-Bootstrap menggantikan Bootstrap JavaScript. Setiap komponen telah dibangun dari awal sebagai komponen React sebenarnya, tanpa dependensi yang tidak diperlukan seperti jQuery. 
Menginstal dependensi dari library [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction).

`yarn add react-bootstrap bootstrap react-router-bootstrap`

## Tutorial

### Menambahkan browser router ke src/index.js
[BrowserRouter](https://reactrouter.com/web/api/BrowserRouter) API riwayat HTML5 (pushState, replaceState, dan popstate event) untuk menjaga UI Anda tetap sinkron dengan URL.
```
import { BrowserRouter as Router } from 'react-router-dom';
...................
<React.StrictMode>
  <Router>
    <App />
  </Router>
</React.StrictMode>
```

### Aset gambar foto profil
Menambahkan aset gambar foto profil pada public/assets/creators.jpg.

### Mengkonfigurasi internasionalisasi
Mengkonfigurasi [i18n](https://react.i18next.com/latest/using-with-hooks) dengan file src/i18n.js dengan konten.
```
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'id',
      debug: true,
      interpolation: {
        escapeValue: false,
      }
    });

export default i18n;
```
Menambahkan file tersebut ke aplikasi melalui src/index.js `import './i18n';`.

### Koleksi translasi bahasa 
Menempatkan aset koleksi translasi bahasa pada public/locales/{language_code}/translation.json.

Versi bahasa
```
{
	"header": {
    "logo": "React Bootstrap",
    "home": "Rumah",
    "search": "Pencarian"
	},
	"homePage": {
		"title": "Info kreator",
		"description": "Halo, perkenalkan aku william sebagai pembuat template react bootstrap. Aku berharap kode yang telah dibuat dapat membantu orang-orang memulai bekerja dengan react."
	},
	"searchPage": {
    "search": "Cari",
		"placeHolder": "Nama film"
	}
}
```
Versi inggris
```
{
	"header": {
    "logo": "React Bootstrap",
    "home": "Home",
    "search": "Search"
	},
	"homePage": {
		"title": "Creators info",
		"description": "Hello, I am William as the react bootstrap template creator. I hope the code I created will help people get started working with React."
	},
	"searchPage": {
		"search": "Search",
		"placeHolder": "Movie's name"
	}
}
```

### Memindahkan file App.* ke folder components
Memindahkan file App.* ke folder components.
Pada src/index.js mengganti sumber impor file `import App from './components/App';`.

### Inisialisasi App.js
Menginisialisasi file App.js dengan internasionalisasi dan router.
```
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  if (location.pathname === '/') {
    return <Redirect to="/home" />;
  }

  return (
    <Suspense fallback="loading">
      <div className="App">
        <Switch>
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
```

### Navigasi aplikasi
Menambahkan Fitur [navigasi](https://react-bootstrap.github.io/components/navs/) pada aplikasi melalui src/components/header/index.js.
```
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import './index.css';

function Header() {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <div className="header">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/home">{t('header.logo')}</Navbar.Brand>
        <Nav className="mr-auto" activeKey={history.location.pathname}>
          <LinkContainer to="/home"><Nav.Link href="/home">{t('header.home')}</Nav.Link></LinkContainer>
          <LinkContainer to="/search"><Nav.Link href="/search">{t('header.search')}</Nav.Link></LinkContainer>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
```
Mengimpor header melalui src/components/App.js.
```
import Header from './header';
...................
  <Route path="/">
    <Header />
  </Route>
...................
```

### Memilih bahasa melalui navigasi
Memilih bahasa dengan menggunakan dropdown bootstrap pada navigasi src/components/header/index.js.
```
...................
  const { t, i18n } = useTranslation();
  const handleLanguage = (language) => i18n.changeLanguage(language);

  return (
    ...................
        <Navbar.Brand href="/home">{t('header.logo')}</Navbar.Brand>
        <Nav className="mr-auto" activeKey={history.location.pathname}>
          ...................
        </Nav>
        <NavDropdown className="language ml-auto" title={i18n.language.toUpperCase()} id="nav-dropdown" onSelect={handleLanguage} alignRight>
          <NavDropdown.Item eventKey="id">ID</NavDropdown.Item>
          <NavDropdown.Item eventKey="en">EN</NavDropdown.Item>
        </NavDropdown>
    ...................
  );
}

export default Header;
```
Beserta file pada navigasi src/components/header/index.css.
```
.language > a {
  color: #FFFFFF;
}
```

### Konten aplikasi
Menambahkan konten pada tiap rute URL pada aplikasi melalui src/components/content/index.js.
```
import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Content() {
  return (
    <Container>
      <Switch>
        <Route path="/home">
        </Route>
        <Route path="/search">
        </Route>
      </Switch>
    </Container>
  );
}

export default Content;
```

### Menambahkan halaman rumah
Menambahkan halaman rumah memuat profil diri menggunakan [kartu](https://react-bootstrap.github.io/components/cards/) src/components/component/home/index.js.
```
import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <Card className="mt-5 mx-auto" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/assets/creators.jpg"} />
        <Card.Body>
          <Card.Title>{t('homePage.title')}</Card.Title>
          <Card.Text>
            {t('homePage.description')}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomePage;
```
Mengimpor halaman rumah pada src/components/content/index.js.
```
import HomePage from '../component/home';
...................
<Route path="/home">
  <HomePage />
</Route>
```

### Membuat konteks pencarian
Membuat [konteks](https://reactjs.org/docs/context.html) pencarian src/context/search/reducer.js.
```
const cases = {
  MOVIE_VALUE: (state, payload) => ({
    ...state,
    movie: payload,
  })
};

const reducer = (state, action) => {
  return cases[action.type](state, action.payload);
};

export default reducer;
```
Memanggilnya pada src/context/search/index.js.
```
import React, { createContext, useReducer } from 'react';
import { node } from 'prop-types';
import reducer from './reducer';

const defaultState = {};

export const SearchContext = createContext();

export function SearchProvider(props){
  const [state, dispatch] = useReducer(reducer, defaultState);
  const {children} = props;

  return <SearchContext.Provider value={[state, dispatch]}>{children}</SearchContext.Provider>;
}

SearchProvider.propTypes = {
  children: node.isRequired,
};
```

### Komponen input search
Membangun komponen untuk melakukan input search dengan [useState](https://reactjs.org/docs/hooks-state.html) dan [grup input](https://react-bootstrap.github.io/components/input-group/) bootstrap src/components/component/search/search.js.
```
import React, { useContext, useState } from 'react';

import { SearchContext } from '../../../context/search';
import { InputGroup, Button, FormControl, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function SearchView() {
  const { t } = useTranslation();
  const [, searchDispatch] = useContext(SearchContext);
  const [movieName, setMovieName] = useState(''); 
  const searchInput = () => {
    searchDispatch({ type: 'MOVIE_VALUE', payload: movieName})
  }
  const handleKeyPress = (target) => {
    if(target.charCode===13){
      searchInput();    
    } 
  }

  return (
    <Row className="mt-3">
      <Col md={{ span: 4, offset: 4 }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder={t('searchPage.placeHolder')}
            aria-label={t('searchPage.placeHolder')}
            aria-describedby="basic-addon2"
            onChange={value => setMovieName(value.target.value)}
            onKeyPress={handleKeyPress}
          />
          <InputGroup.Append>
            <Button onClick={searchInput}>{t('searchPage.search')}</Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default SearchView;
```

### Komponen output search
Membangun komponen untuk menampilkan output search dengan [useEffect](https://reactjs.org/docs/hooks-effect.html) dan [fetch](https://reactjs.org/docs/faq-ajax.html) 
api src/components/component/search/movie.js.
```
import React, { useContext, useEffect, useState } from 'react';

import { SearchContext } from '../../../context/search';
import { Card, Alert, Row, Col } from 'react-bootstrap';

function MovieView() {
  const [search] = useContext(SearchContext);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie({});
    if(search.movie){
      fetch('https://www.omdbapi.com/?i=null&apikey=null&t='+search.movie.toLowerCase()).then(res=> res.json())
        .then(response => setMovie(response))
        .catch(()=>{
          setMovie({});
        });
    }
  },[search, setMovie]);

  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        {movie.Response === "True" && (
          <Card>
            {movie.Poster !== "N/A" && (
              <Card.Img variant="top" src={movie.Poster} alt="none"/>
            )}
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              {movie.Plot !== "N/A" && (
                <Card.Text>
                  {movie.Plot}
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        )}
        {movie.Response === "False" && (
          <Alert variant='warning'>
            {movie.Error}
          </Alert>
        )}
      </Col>
    </Row>
  );
}

export default MovieView;
```
Anda perlu mengganti apikey dan i dari https://www.omdbapi.com/?i=null&apikey=null.
### Menambahkan halaman pencarian
Menambahkan halaman pencarian beserta komponennya pada rute URL src/components/component/search/index.js.
```
import React from 'react';

import MovieView from './movie';
import SearchView from './search';
import { SearchProvider } from '../../../context/search'

function SearchPage() {
  return (
    <SearchProvider>
      <SearchView />
      <MovieView />
    </SearchProvider>
  );
}

export default SearchPage;
```
Mengimpor halaman pencarian pada src/components/content/index.js.
```
import SearchPage from '../component/search';
...................
<Route path="/search">
  <SearchPage />
</Route>
```

### Menonaktifkan debug mode pada React-i18next
Menonaktifkan debug mode pada React-i18next dengan mengubah konfigurasi src/i18n.js `debug: false`.

### Fungsionalitas PWA 
Jika ingin agar aplikasi bekerja offline dan lebih cepat memuat halaman tambahkan [PWA](https://bit.ly/CRA-PWA) di file src/index.js ubah menjadi `serviceWorker.register();`.

### `yarn start`
Menjalankan aplikasi pada mode pengembangan.<br />
Buka [http://localhost:3000](http://localhost:3000) untuk melihat halaman di browser.
halaman memuat ulang saat melakukan edit.<br />
kamu juga dapat melihat error pada konsol.

### Penyebaran
Pada penyebaran aplikasi akan digunakan kerangka dari [netlify](https://www.netlify.com/).
- Login ke akun netlify.
- Klik new site from github.
- Sambungkan dengan akun github.
- Pilih repository yang ingin disebarkan.
- Setting build command `yarn build` dan publish directory `build/`.
- Akses situs contoh pada [https://awesome-brattain-372325.netlify.app/home](https://awesome-brattain-372325.netlify.app/home).

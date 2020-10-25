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

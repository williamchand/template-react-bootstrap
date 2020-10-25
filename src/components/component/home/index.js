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

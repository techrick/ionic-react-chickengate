import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Die Chickengate App für alle :D</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        ... in Arbeit ...
        cheers aus rodheim
      </IonContent>
    </IonPage>
  );
};

export default Home;

import React from 'react'
import {IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonContent} from '@ionic/react'

const home = () => {

    return (
        <IonContent>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>React Ionic app</IonCardTitle>
                <IonCardSubtitle>With menu =)</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
        </IonContent>  
    )
}

export default home
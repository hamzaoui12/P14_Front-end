# DatePicker Package

Le **DatePicker** est un composant React léger, personnalisable et facile à intégrer, conçu pour permettre une sélection de dates intuitive dans les formulaires.


##  Installation

Ajoutez le package à votre projet via npm :

-  `npm install datepicker-react-projet14`
### ou
-  `yarn add datepicker-react-projet14`

## Utilisation
### Importer le composant

```javascript
import { useState } from "react";
import { DatePicker } from "datepicker-react-projet14";
```

### Exemple
Voici un exemple simple d’utilisation du composant DatePicker :

```javascript
import React, { useState } from "react";
import { DatePicker } from "datepicker-react-projet14";

const ExempleComposant = () => {
  const [dateSelectionnee, setDateSelectionnee] = useState('');

  const handleDateChange = (nouvelleDate) => {
    setDateSelectionnee(nouvelleDate);
    console.log('Date sélectionnée :', nouvelleDate);
  };

  return (
    <div>
      <h2>Veuillez sélectionner une date :</h2>
      <DatePicker selectedDate={dateSelectionnee} onDateChange={handleDateChange} />
      <p>Date sélectionnée : {dateSelectionnee}</p>
    </div>
  );
};

export default ExempleComposant;
```
## Props

Le composant DatePicker accepte les props suivantes :
- selectedDate : (optionnel) Une chaîne de caractères représentant la date initiale sélectionnée au format YYYY-MM-DD.
- onDateChange : (requis) Une fonction de rappel qui reçoit la nouvelle date sous forme de chaîne lorsque l’utilisateur sélectionne ou modifie la date.

### Exemple
```javascript
<DatePicker
  selectedDate="2024-11-18"
  onDateChange={(date) => console.log('Date sélectionnée :', date)}
/>
```
## style

Le composant utilise des styles par défaut mais peut être personnalisé davantage en utilisant du CSS externe ou Tailwind CSS. Les éléments d’entrée et de sélection de date ont un style de base, mais vous pouvez les modifier ou les étendre selon vos besoins.

## Fonctionnalités

- Saisie conviviale : Le champ principal ouvre le sélecteur de date au focus.
- Personnalisation facile : Facilement ajustable pour s’adapter au style de votre projet.
- Accessibilité : Le DatePicker prend en charge les états de focus et les interactions au clavier.
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour sauvegarder les valeurs dans le localStorage
    function saveToLocalStorage(id) {
        const element = document.getElementById(id);
        if (element) {
            localStorage.setItem(id, element.value);
        }
    }

    // Fonction pour récupérer les valeurs depuis le localStorage
    function loadFromLocalStorage(id) {
        const element = document.getElementById(id);
        if (element) {
            const savedValue = localStorage.getItem(id);
            if (savedValue !== null) {
                element.value = savedValue;
            }
        }
    }

    // Fonction pour gérer la multiplication par deux si la checkbox est cochée
    function calculateAndDisplayResult() {
        // Identifiants des inputs et des checkboxes correspondants
        const inputCheckboxPairs = [
            { input1: 'input-normal', input2: 'input-normal2', checkbox: 'checkbox-normal' },
            { input1: 'input-corde', input2: 'input-corde2', checkbox: 'checkbox-corde' },
            { input1: 'input-echelle', input2: 'input-echelle2', checkbox: 'checkbox-echelle' },
            { input1: 'input-nacelle', input2: 'input-nacelle2', checkbox: 'checkbox-nacelle' },
            { input1: 'input-perche', input2: 'input-perche2', checkbox: 'checkbox-perche' },
            { input1: 'input-eauPure', input2: 'input-eauPure2', checkbox: 'checkbox-eau' },
            { input1: 'input-BSO', input2: 'input-BSO2' }
        ];

        // Calculer les résultats
        let totalFacturation = 0; // Initialiser le total facturation

        inputCheckboxPairs.forEach(pair => {
            const input1 = parseFloat(document.getElementById(pair.input1).value) || 0;
            const input2 = parseFloat(document.getElementById(pair.input2).value) || 0;
            const checkbox = document.getElementById(pair.checkbox);

            let result = input1 * input2;
            if (checkbox && checkbox.checked) {
                result *= 2;
            }
            totalFacturation += result; // Ajouter le résultat au total facturation
        });

        // Mettre à jour l'input total-facturation avec le nouveau total
        const inputTotalFacturation = document.getElementById('input-total-facturation');
        if (inputTotalFacturation) {
            inputTotalFacturation.value = totalFacturation.toFixed(2);
        }

        // Mettre à jour les totaux
        updateTotalTotal();
    }

    // Identifiants des inputs à sauvegarder dans le localStorage
    const baremeInputIds = [
        'input-km',
        'input-normal',
        'input-corde',
        'input-echelle',
        'input-nacelle',
        'input-perche',
        'input-eauPure',
        'input-BSO'
    ];

    // Charger les valeurs depuis le localStorage lors du chargement de la page
    baremeInputIds.forEach(loadFromLocalStorage);

    // Ajouter des écouteurs d'événements pour sauvegarder les valeurs lorsque l'utilisateur les change
    baremeInputIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => {
                saveToLocalStorage(id);
                calculateAndDisplayResult();
            });
        }
    });

    // Ajouter des écouteurs d'événements pour les checkboxes
    const checkboxIds = [
        'checkbox-normal',
        'checkbox-corde',
        'checkbox-echelle',
        'checkbox-nacelle',
        'checkbox-perche',
        'checkbox-eau'
    ];

    checkboxIds.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            checkbox.addEventListener('change', calculateAndDisplayResult);
        }
    });

    // Sélectionner les éléments nécessaires
    const inputNormal = document.getElementById('input-normal');
    const inputNormal2 = document.getElementById('input-normal2');
    const inputPerche = document.getElementById('input-perche');
    const inputPerche2 = document.getElementById('input-perche2');
    const inputCorde = document.getElementById('input-corde');
    const inputCorde2 = document.getElementById('input-corde2');
    const inputEchelle = document.getElementById('input-echelle');
    const inputEchelle2 = document.getElementById('input-echelle2');
    const inputNacelle = document.getElementById('input-nacelle');
    const inputNacelle2 = document.getElementById('input-nacelle2');
    const inputEauPure = document.getElementById('input-eauPure');
    const inputEauPure2 = document.getElementById('input-eauPure2');
    const inputBSO = document.getElementById('input-BSO');
    const inputBSO2 = document.getElementById('input-BSO2');
    const inputTotalFacturation = document.getElementById('input-total-facturation');

    const inputKm = document.getElementById('input-km');
    const inputKm2 = document.getElementById('input-km2');
    const inputPeage = document.getElementById('input-peage');
    const inputRepas = document.getElementById('input-repas');
    const inputLocation = document.getElementById('input-location');
    const inputTotalDepense = document.getElementById('input-total-depense');

    const inputTotalTotal = document.getElementById('input-total-total');

    // Fonction pour mettre à jour le champ total-facturation
    function updateTotalFacturation() {
        const normalValue = parseFloat(inputNormal.value) || 0;
        const normal2Value = parseFloat(inputNormal2.value) || 0;
        const cordeValue = parseFloat(inputCorde.value) || 0;
        const corde2Value = parseFloat(inputCorde2.value) || 0;
        const percheValue = parseFloat(inputPerche.value) || 0;
        const perche2Value = parseFloat(inputPerche2.value) || 0;
        const echelleValue = parseFloat(inputEchelle.value) || 0;
        const echelle2Value = parseFloat(inputEchelle2.value) || 0;
        const nacelleValue = parseFloat(inputNacelle.value) || 0;
        const nacelle2Value = parseFloat(inputNacelle2.value) || 0;
        const eauPureValue = parseFloat(inputEauPure.value) || 0;
        const eauPure2Value = parseFloat(inputEauPure2.value) || 0;
        const BSOValue = parseFloat(inputBSO.value) || 0;
        const BSO2Value = parseFloat(inputBSO2.value) || 0;

        const totalFacturation = (normalValue * normal2Value) +
                                (percheValue * perche2Value) +
                                (echelleValue * echelle2Value) +
                                (nacelleValue * nacelle2Value) +
                                (eauPureValue * eauPure2Value) +
                                (cordeValue * corde2Value) +
                                (BSOValue * BSO2Value);

        inputTotalFacturation.value = totalFacturation.toFixed(2);
        updateTotalTotal(); // Mise à jour du total général
    }

    // Fonction pour mettre à jour le champ input-total-depense
    function updateTotalDepense() {
        const kmValue = parseFloat(inputKm.value) || 0;
        const km2Value = parseFloat(inputKm2.value) || 0;
        const peageValue = parseFloat(inputPeage.value) || 0;
        const repasValue = parseFloat(inputRepas.value) || 0;
        const locaitonValue = parseFloat(inputLocation.value) || 0;

        const totalDepense = (kmValue * km2Value) + peageValue + repasValue + locaitonValue;

        inputTotalDepense.value = totalDepense.toFixed(2);
        updateTotalTotal(); // Mise à jour du total général
    }

    // Fonction pour mettre à jour le champ input-total-total
    function updateTotalTotal() {
        const totalDepense = parseFloat(inputTotalDepense.value) || 0;
        const totalFacturation = parseFloat(inputTotalFacturation.value) || 0;

        const totalTotal = totalDepense + totalFacturation;

        inputTotalTotal.value = totalTotal.toFixed(2);
    }

    // Écouter les changements dans les inputs
    inputNormal.addEventListener('input', updateTotalFacturation);
    inputNormal2.addEventListener('input', updateTotalFacturation);
    inputCorde.addEventListener('input', updateTotalFacturation);
    inputCorde2.addEventListener('input', updateTotalFacturation);
    inputPerche.addEventListener('input', updateTotalFacturation);
    inputPerche2.addEventListener('input', updateTotalFacturation);
    inputEchelle.addEventListener('input', updateTotalFacturation);
    inputEchelle2.addEventListener('input', updateTotalFacturation);
    inputNacelle.addEventListener('input', updateTotalFacturation);
    inputNacelle2.addEventListener('input', updateTotalFacturation);
    inputEauPure.addEventListener('input', updateTotalFacturation);
    inputEauPure2.addEventListener('input', updateTotalFacturation);
    inputBSO.addEventListener('input', updateTotalFacturation);
    inputBSO2.addEventListener('input', updateTotalFacturation);
    inputKm.addEventListener('input', updateTotalDepense);
    inputKm2.addEventListener('input', updateTotalDepense);
    inputPeage.addEventListener('input', updateTotalDepense);
    inputRepas.addEventListener('input', updateTotalDepense);
    inputLocation.addEventListener('input', updateTotalDepense);

    const yesRadios = document.querySelectorAll('.yes-radio');
    const noRadios = document.querySelectorAll('.no-radio');

    yesRadios.forEach(yesRadio => {
        yesRadio.addEventListener('change', function() {
            const input = this.closest('.type-list').querySelector('.currency-input');
            if (this.checked) {
                input.disabled = false;
            }
            updateTotalFacturation();
        });
    });

    noRadios.forEach(noRadio => {
        noRadio.addEventListener('change', function() {
            const input = this.closest('.type-list').querySelector('.currency-input');
            if (this.checked) {
                input.disabled = true;
            }
            updateTotalFacturation();
        });
    });

    // Appeler calculateAndDisplayResult lors du chargement de la page pour initialiser les valeurs
    calculateAndDisplayResult();
});

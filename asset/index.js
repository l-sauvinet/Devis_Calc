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
        const inputCheckboxPairs = [
            { input1: 'input-normal', input2: 'input-normal2', checkbox: 'checkbox-normal' },
            { input1: 'input-corde', input2: 'input-corde2', checkbox: 'checkbox-corde' },
            { input1: 'input-echelle', input2: 'input-echelle2', checkbox: 'checkbox-echelle' },
            { input1: 'input-nacelle', input2: 'input-nacelle2', checkbox: 'checkbox-nacelle' },
            { input1: 'input-perche', input2: 'input-perche2', checkbox: 'checkbox-perche' },
            { input1: 'input-eauPure', input2: 'input-eauPure2', checkbox: 'checkbox-eau' },
            { input1: 'input-BSO', input2: 'input-BSO2' }
        ];

        let totalFacturation = 0;
        inputCheckboxPairs.forEach(pair => {
            const input1 = parseFloat(document.getElementById(pair.input1).value) || 0;
            const input2 = parseFloat(document.getElementById(pair.input2).value) || 0;
            const checkbox = document.getElementById(pair.checkbox);

            let result = input1 * input2;
            if (checkbox && checkbox.checked) {
                result *= 2;
            }
            totalFacturation += result;
        });

        const frequencySelect = document.getElementById('frequency-select');
        const discountFactor = parseFloat(frequencySelect.value) || 1;

        // Appliquer le facteur de réduction
        const discountedTotal = totalFacturation * discountFactor;

        // Mettre à jour l'élément HTML avec le total facturé
        const inputTotalFacturation = document.getElementById('input-total-facturation');
        if (inputTotalFacturation) {
            inputTotalFacturation.value = discountedTotal.toFixed(2);
        }

        updateTotalTotal();
    }

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

    baremeInputIds.forEach(loadFromLocalStorage);

    baremeInputIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => {
                saveToLocalStorage(id);
                calculateAndDisplayResult();
            });
        }
    });

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

    function updateTotalDepense() {
        const kmValue = parseFloat(inputKm.value) || 0;
        const km2Value = parseFloat(inputKm2.value) || 0;
        const peageValue = parseFloat(inputPeage.value) || 0;
        const repasValue = parseFloat(inputRepas.value) || 0;
        const locationValue = parseFloat(inputLocation.value) || 0;

        const totalDepense = (kmValue * km2Value) + peageValue + repasValue + locationValue;

        inputTotalDepense.value = totalDepense.toFixed(2);
        updateTotalTotal();
    }

    function updateTotalTotal() {
        const totalDepense = parseFloat(inputTotalDepense.value) || 0;
        const totalFacturation = parseFloat(inputTotalFacturation.value) || 0;

        const totalTotal = totalDepense + totalFacturation;

        inputTotalTotal.value = totalTotal.toFixed(2);
    }

    inputNormal.addEventListener('input', calculateAndDisplayResult);
    inputNormal2.addEventListener('input', calculateAndDisplayResult);
    inputCorde.addEventListener('input', calculateAndDisplayResult);
    inputCorde2.addEventListener('input', calculateAndDisplayResult);
    inputPerche.addEventListener('input', calculateAndDisplayResult);
    inputPerche2.addEventListener('input', calculateAndDisplayResult);
    inputEchelle.addEventListener('input', calculateAndDisplayResult);
    inputEchelle2.addEventListener('input', calculateAndDisplayResult);
    inputNacelle.addEventListener('input', calculateAndDisplayResult);
    inputNacelle2.addEventListener('input', calculateAndDisplayResult);
    inputEauPure.addEventListener('input', calculateAndDisplayResult);
    inputEauPure2.addEventListener('input', calculateAndDisplayResult);
    inputBSO.addEventListener('input', calculateAndDisplayResult);
    inputBSO2.addEventListener('input', calculateAndDisplayResult);
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
            calculateAndDisplayResult();
        });
    });

    noRadios.forEach(noRadio => {
        noRadio.addEventListener('change', function() {
            const input = this.closest('.type-list').querySelector('.currency-input');
            if (this.checked) {
                input.disabled = true;
            }
            calculateAndDisplayResult();
        });
    });

    yesRadios.forEach(yesRadio => {
        yesRadio.addEventListener('change', function() {
            const input = this.closest('.type-list-BSO').querySelector('.currency-input');
            if (this.checked) {
                input.disabled = false;
            }
            calculateAndDisplayResult();
        });
    });

    noRadios.forEach(noRadio => {
        noRadio.addEventListener('change', function() {
            const input = this.closest('.type-list-BSO').querySelector('.currency-input');
            if (this.checked) {
                input.disabled = true;
            }
            calculateAndDisplayResult();
        });
    });

    const frequencySelect = document.querySelector('.frequency');
    if (frequencySelect) {
        frequencySelect.addEventListener('change', calculateAndDisplayResult);
    }
    calculateAndDisplayResult();
});

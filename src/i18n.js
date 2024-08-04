import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next"
        }
    },
    fr: {
        translation: {
            "chart.capital.credit": "Capital avec crédit",
            "chart.capital.invest": "Capital avec investissement pour comparaison",
            "chart.cashflow": "Cash flow si pas d'effort",
            "chart.interest": "Remboursement des intérêts",
            "credit.cost.is": "Le coût mensuel du crédit est de",
            "effort.is": "avec un effort mensuel de",
            "credit.cost": "Coût total des intérêts",
            "debt.amount": "Montant emprunté",
            "credit.duration": "Durée du crédit",
            "credit.rate": "Taux d'intérêt du crédit",
            "credit.yield": "Rendement estimé de l'investissement",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
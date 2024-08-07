import {Accordion} from "react-bootstrap";

export default function Glossary () {
    return <>
        <Accordion>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Investissement avec un crédit toujours rentable ?</Accordion.Header>
                <Accordion.Body>
                    Investir avec un crédit n'est pas toujours avantageux si l'effort financier nécessaire pour couvrir les dépenses dépasse les revenus locatifs.
                    En effet, si cet effort était plutôt investi dans un placement offrant un meilleur rendement, l'investisseur pourrait obtenir un gain supérieur.
                    Dans ce cas, l'argent injecté chaque mois pour combler un cash flow négatif pourrait être plus rentable s'il était placé ailleurs,
                    ce qui rend l'investissement immobilier moins intéressant.
                    <br/>
                    <br/>
                    Cette application permet de comparer ces deux situations pour voir laquelle serait le plus rentable (= capital accumulé à la fin de la période) pour des paramètres donnés,
                    en montrant le résultat d'un investissement sur indice de la somme équivalente à l'effort que le crédit aurait nécessité.
                    <br/>
                    <br/>
                    Attention, pour déterminer si un investissement en vaut la peine, d'autres facteurs que le rendement sont importants, comme la diversification.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
                <Accordion.Header>Cash flow</Accordion.Header>
                <Accordion.Body>
                    Le cash flow dans un investissement immobilier est un concept clé qui désigne le flux de trésorerie net généré par un bien immobilier
                    après avoir pris en compte tous les revenus et toutes les dépenses associées. C’est un indicateur essentiel pour évaluer la rentabilité d’un investissement immobilier.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="20">
                <Accordion.Header>Effort</Accordion.Header>
                <Accordion.Body>
                    L'effort dans un investissement immobilier est la part des revenus personnels que l'investisseur doit apporter chaque mois pour
                    couvrir les dépenses liées au bien immobilier après déduction des revenus locatifs. Il représente donc la somme d'argent que
                    l'investisseur doit injecter de sa poche pour combler la différence entre les revenus locatifs et les coûts totaux
                    (remboursement du prêt, taxes, charges, etc.). Un effort financier élevé signifie que l'investissement demande un
                    apport personnel important, tandis qu'un effort faible indique que le bien s'autofinance en grande partie.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="30">
                <Accordion.Header>Effort vs cash flow</Accordion.Header>
                <Accordion.Body>
                    Lorsqu'un investissement immobilier génère un cash flow négatif, cela signifie que les revenus locatifs ne suffisent pas à couvrir
                    les dépenses totales (prêt, taxes, charges, etc.). Pour compenser cette différence, l'investisseur doit apporter de sa poche une somme supplémentaire chaque mois :
                    c'est ce qu'on appelle l'effort financier. En d'autres termes, un effort financier correspond à
                    la somme nécessaire pour équilibrer les comptes lorsqu'un bien immobilier produit un cash flow négatif.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="40">
                <Accordion.Header>Crédit et intérêts composés</Accordion.Header>
                <Accordion.Body>
                    Les intérêts composés sont des intérêts calculés non seulement sur le capital initial,
                    mais aussi sur les intérêts déjà accumulés. Dans le cadre d'un crédit, cela signifie que chaque période (par exemple, chaque mois),
                    les intérêts dus sont ajoutés au montant restant à rembourser, augmentant ainsi la base sur laquelle les intérêts futurs seront calculés.
                    <br/>
                    <br/>
                    Pour un emprunteur, cela implique que le coût total du crédit peut augmenter de manière significative si
                    les remboursements sont prolongés ou si le taux d'intérêt est élevé, car les intérêts s'accumulent sur eux-mêmes au fil du temps.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="50">
                <Accordion.Header>Indices boursiers</Accordion.Header>
                <Accordion.Body>
                    Un indice boursier est un indicateur qui mesure la performance d'un ensemble d'actions, reflétant ainsi la santé d'un marché ou d'un secteur.
                    Par exemple, le S&P 500 suit les 500 plus grandes entreprises américaines cotées en bourse, le CAC 40 représente les 40 principales entreprises françaises,
                    et le NASDAQ est centré sur les sociétés technologiques aux États-Unis.
                    <br/>
                    <br/>
                    Les ETF (Exchange-Traded Funds) sont des fonds qui répliquent la performance d'un indice boursier,
                    permettant aux investisseurs d'acheter une seule part qui suit un indice comme le S&P 500, le CAC 40 ou le NASDAQ,
                    offrant ainsi une diversification instantanée à moindre coût.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="60">
                <Accordion.Header>Taxes, impôts et frais</Accordion.Header>
                <Accordion.Body>
                    Lorsqu'on compare deux investissements en termes de rendement, il est crucial de prendre en compte les impôts et les frais pour évaluer le rendement net.
                    En effet, le rendement brut ne reflète pas la véritable performance d'un investissement, car il ne tient pas compte des taxes et frais qui peuvent considérablement réduire les gains.
                    <br/>
                    <br/>
                    Les impôts varient selon le type d'investissement et la fiscalité applicable, ce qui peut rendre un placement, a priori attractif, moins rentable après imposition.
                    Ainsi, pour comparer objectivement deux investissements,
                    il faut calculer le rendement net après impôts, qui seul donne une image fidèle du bénéfice réel que l'investisseur percevra.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="70">
                <Accordion.Header>Rendement d'un bien immobilier</Accordion.Header>
                <Accordion.Body>
                    Pour calculer le rendement d'un bien immobilier, on utilise généralement le rendement locatif brut. Celui-ci se calcule en divisant le revenu locatif annuel
                    (le loyer perçu sur une année) par le prix d'achat du bien, puis en multipliant par 100 pour obtenir un pourcentage. Par exemple, si un bien est acheté pour 200 000 €
                    et que le loyer annuel est de 10 000 €, le rendement brut est de 5 % (10 000 € ÷ 200 000 € x 100).
                    <br/>
                    <br/>
                    Ce rendement peut être affiné en prenant en compte les charges, les impôts, et autres frais, pour obtenir le rendement net, qui reflète mieux la rentabilité réelle de l'investissement.
                    <br/>
                    <br/>
                    En plus de ce rendement locatif, il faut également considérer la possible appréciation du bien immobilier. Avec le temps,
                    la valeur du bien peut augmenter, ce qui ajoute un gain en capital à la rentabilité de l'investissement.
                    Le rendement global d'un bien immobilier prend donc en compte à la fois les revenus locatifs et la plus-value potentielle liée à
                    l'augmentation de la valeur du bien.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
}
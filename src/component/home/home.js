import React from 'react';
import ReactDOM from 'react-dom';
import './home.css'
class Home extends React.Component{
    render(){
        return (
        <div className="doc">
            <h1 className="title">Le jeu de la vie</h1>
            <p>Faire écrire le scénario de la vie par un ordinateur, est-ce bien sérieux ? En tout cas, cela démarre comme un jeu ! Et l'on finit par un hallucinant zoo d’automates, d’anges, de mortels, d’errants…</p> 
            <h3>Introduction</h3>
            <p>Faire écrire le scénario de la vie par un ordinateur, est-ce bien sérieux ? En tout cas, ça démarre comme un jeu ! Et ça finit par un hallucinant zoo d’automates, d’anges, de mortels, d’errants, …    Le mathématicien américain d’origine hongroise John Von Neumann est un vrai génie dont les travaux ont, entre autres, jeté les bases de l’informatique.<br/> Il se pose beaucoup de questions dans les années 1950, notamment sur les automates autoreproducteurs (pouvant reproduire une exacte copie d’eux-mêmes)    Un autre mathématicien, Stanislas Ulam (polonais), lui suggère la méthode décisive.<br/> Il veut créer sur des ordinateurs des jeux capables d’inventer des formes géométriques.<br/>L’univers de Von Neumann commence ainsi par un damier où les cases, baptisées cellules, peuvent revêtir 2 états : éteint/allumé.<br/>C’est John Conway, sur une idée de Von Neumann, l’inventeur du célèbre jeu de la vie (1970) : jeu à un joueur dont l'objectif est la survie et la croissance d'une population représentée par des jetons sur un quadrillage dont les cases sont des cellules tant au sens biologique que topographique...</p>
            <h3>Les règles du jeu</h3>
            <p>Le monde du « Jeu de la vie » est un plan infini quadrillé, dont chaque case est, soit occupée par une cellule, soit vide.<br/>Chaque case possède huit voisines, placées tout autour d’elle.<br/>D’une génération à l’autre, des naissances et des décès s’y déroulent mécaniquement selon la règle simpliste de Conway :Pour un automate 2D à 2 états avec voisinage de 8, il y a 2^2^9 = 1.34^154 fonctions de transitions différentes possibles ! Pour expliciter chacune de ces fonctions, il faudrait décrire l'état de sortie correspondant à chacune des 512 configurations de voisinage.<br/>La fonction de transition du Jeu de la Vie se résume en fait à des méta-règles qui regroupent à elles-seules les 512 configurations.</p>
            <div className='row'>
                <div className="col-3">
                    <table>
                    <tr>
                            <td><div className='cell'></div></td>
                            <td><div className='cell'></div></td>
                            <td><div className='cell'></div></td>
                            <td><div className='cell'></div></td>
                            <td><div className='cell'></div></td>
                    </tr> 
                    <tr>
                            <td><div className='cell'></div></td>
                            <td><div className='cell green'></div></td>
                            <td><div className='cell green'></div></td>
                            <td><div className='cell green'></div></td>
                            <td><div className='cell'></div></td>
                    </tr> 
                    <tr>
                            <td><div className='cell'></div></td>
                            <td><div className='cell green'></div></td>
                            <td><div className='cell red'></div></td>
                            <td><div className='cell green'></div></td>
                            <td><div className='cell'></div></td>
                    </tr> 
                    <tr>
                            <td><div className='cell'></div></td>
                            <td><div className='cell green'></div></td>
                            <td><div className='cell green'></div></td>
                            <td><div className='cell green'></div></td>
                            <td><div className='cell'></div></td>
                    </tr> 
                    <tr>
                            <td><div className='cell'></div></td>
                            <td><div className='cell'></div></td>
                            <td><div className='cell'></div></td>
                            <td><div className='cell'></div></td>
                            <td><div className='cell'></div></td>
                    </tr> 
                    </table>
                </div>
                <div className='col-8'>
                    <p>-Cellule à considérer (En rouge dans cet exemple).<br/>-L'état de chacune des 8 cellules voisines est à visualiser,afin de connaitre l'avenir de la cellule considérée, lors de sa prochaine génération (En reouge pour cet exemple)</p>
                </div>  
            </div>
            <h5>Principe de naissance :</h5>
            <p>Si une case est vide et que trois de ses voisines sont occupées, alors une naissance s’y produit (étrange ité!)</p>
            <h5>Principe de stase :</h5>
            <p>Si une case est occupée, la survie n’y est possible que si deux ou trois cases voisines sont occupées</p>
            <h5>Principe de mort :</h5>
            <p>Si une case est entourée de 0 ou 1 voisine occupée, la case est vide à la génération suivante (mort par isolement).<br/>Si une case est entourée de 3 voisines occupées et plus, la case est vide à la génération suivante (mort par surpopulation).</p>
        </div>
        )
    }
}
export default Home ;
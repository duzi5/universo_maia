import React from "react";
import video from "./video.mp4";
import "./Take09.scss";
import buffalo from "./BUFALLO.jpeg";
import albino from "./ALBINO 03.jpeg";
import gsap from "gsap";
// import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
const Take09 = () => {
  // gsap.registerPlugin(ScrambleTextPlugin)
    return (
        <section className="video-section">
            <video className="video-background" autoPlay muted loop playsInline preload="auto">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content carousel-container">
                <div className="titulo">
                    <h1 className="title">Produtos</h1>
                </div>
                <div className="cards">

                    {/* Card 1 */}
                    <input type="radio" id="card1" className="toggle" name="accordion" />
                    <label htmlFor="card1" className="selling-card direita">
                       <div className="cabecalho">
                       <img className="imagens"src={albino} alt="" />
                        <h3>Psilocybe cubensis albino</h3>
                       </div>
                        <div className="conteudo">
                            <p>O Psilocybe cubensis albino é uma variedade pra lá de rara e única do famoso cogumelo psicodélico Psilocybe cubensis. O que mais chama atenção nesse cogumelo é que ele é branquinho, daí o nome "albino". Enquanto a maioria dos Psilocybe cubensis tem aquela vibe marrom ou acastanhada, o Psilocybe cubensis albino se destaca pela aparência diferentona.</p>
                            <p>Tal qual as outras variedades de Psilocybe cubensis, esse camarada albino manda bem na substância psicoativa psilocibina, que é a responsável por te levar numa viagem psicodélica. Quando você dá uma conferida nesses cogumelos, pode esperar um passeio pelos sentidos, uma mudança na percepção e uma ligação profunda com o universo.</p>
                            <p>Por conta de sua raridade e peculiaridades, o Psilocybe cubensis albino é um cogumelo que chama a atenção dos entusiastas do mundo psicodélico. Mas é importante frisar que, assim como com todos os cogumelos psicodélicos, usar o Psilocybe cubensis albino requer responsabilidade e um ambiente apropriado. É melhor ainda se tiver alguém experiente junto para garantir que a viagem seja segura e significativa.</p>
                            <p className="question">Como ele chega até você?</p>
                            <p>Desidratado e pronto para consumo. Você pode optar em comer ou fazer o Lemon Tek, que acaba sendo umas das preferências devido ao sabor marcante do cogumelo in natura.</p>
                            <p className="question">Qual investimento?</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Quantidade</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2g</td>
                                        <td>R$40</td>
                                    </tr>
                                    <tr>
                                        <td>10g</td>
                                        <td>R$180</td>
                                    </tr>
                                    <tr>
                                        <td>25g</td>
                                        <td>R$400</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="frete">
                              <p> Frete não incluso.</p>
                            </div>
                        </div>
                    </label>

                    {/* Card 2 */}
                    <input type="radio" id="card2" className="toggle" name="accordion" />
                    <label htmlFor="card2" className="selling-card direita">
                        <h3>Kit Cultivo do Psilocybe cubensis albino</h3>
                        <div className="conteudo">

                            <p className="question">Imagina só, ter um kit mágico pra você mesmo cultivar seu cogu?</p>
                            <p>Cogumelar-se com total consciência e saber que foi sua energia, seu cultivo e sua vivência que deram vida e força para esse fungo.</p>
                            <p className="question">Imaginou? Pronto ! Desejo realizado!</p>
                            <p>Esses kits são como um passaporte para a viagem psicodélica, com tudo que você precisa pra cultivar seus cogumelos em casa. O truque é criar o ambiente certo e seguir as instruções pra que esses caras cresçam direitinho.</p>
                            <p>Mas ó, fica naquele alerta: não é só pegar o kit e sair cogumelando por aí. Você tem que ser responsável e consciente. Os efeitos dos cogumelos variam dependendo de como você cuida, do ambiente e do estado da sua mente naquele dia.</p>
                            <p className="question">Como ele chega até você?</p>
                            <p>Você vai receber o kit contendo o substrato já esterilizado e os esporos + a caixa organizadora e uma mentoria completa. Depois disso, é seguir as orientações da mentoria e curtir seu processo.</p>
                            <p className="question">Quantas gramas por colheita?</p>
                            <p>Em média de 15 gramas à 20 gramas depois de desidratado e cuidando direitinho do seu kit você consegue mais duas colheitas.</p>
                            <p className="question">Qual é o investimento?</p>
                            <p>R$ 200,00</p>
                            <div className="frete">
                              <p> Frete não incluso.</p>
                            </div>
                        </div>
                    </label>

                    {/* Card 3 */}
                    <input type="radio" id="card3" className="toggle" name="accordion" />
                    <label htmlFor="card3" className="selling-card direita">
                       <div className="cabecalho">
                       <img className="imagens"src={buffalo} alt="" />
                        <h3>Psilocybe cubensis Buffalo Pink</h3>
                       </div>
                        <div className="conteudo">
                            <p>o Psilocybe cubensis Buffalo Pink é tipo um rockstar dos cogumelos psicodélicos, super famoso e encontrado no mundo inteiro. Esses caras crescem em lugares tropicais e subtropicais e são conhecidos por proporcionar viagens incríveis na mente.</p>
                            <p>A mágica toda acontece graças à psilocibina, o ingrediente secreto desses cogumelos. Quando você manda ver na ingestão, a psilocibina se transforma em psilocina no seu corpo e daí começa a jornada. Você pode esperar uma mudança séria na percepção, na forma como pensa e como vê as coisas. Quem já viveu a experiência garante um contato com o divino e frisa no autoconhecimento pós vivência.</p>
                            <p>Só um detalhe importante: o uso desses cogumelos, como de outros psicodélicos, tem que ser feita na vibe da responsabilidade e com cuidado. Os efeitos variam com a dose, ambiente e como você tá na mente naquele dia.</p>
                            <p>Sempre indicamos uma viagem guiada para melhor proveito da experiência.</p>
                            <p className="question">Como ele chega até você ?</p>
                            <p>Desidratado e pronto para consumo. Você pode optar em comer ou fazer o Lemon Tek, que acaba sendo umas das preferências devido ao sabor marcante do cogumelo in natura.</p>
                            <p className="question">Qual investimento ?</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Quantidade</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2g</td>
                                        <td>R$40</td>
                                    </tr>
                                    <tr>
                                        <td>10g</td>
                                        <td>R$180</td>
                                    </tr>
                                    <tr>
                                        <td>25g</td>
                                        <td>R$400</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="frete">
                              <p> Frete não incluso.</p>
                            </div>
                        </div>
                    </label>

                </div>
            </div>
        </section>
    );
};

export default Take09;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video from "./video.mp4";
import "./Take09.scss";
import buffalo from "./BUFALLO.jpeg";
import albino from "./ALBINO 03.jpeg";
import leao from "./jubadeleao.jpg";
import kit from "./kit.jpeg";

const Take09 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="video-section">
      <video className="video-background" autoPlay muted loop playsInline preload="auto">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content carousel-container">
        <div className="titulo">
          <h1 className="title">COGUMELANDO-SE</h1>
        </div>
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="slide">
            <div className="selling-card">
              <h3>Psilocybe cubensis albino</h3>
              <img className="imagens" src={albino} alt="Psilocybe cubensis albino" />
              <p>O Psilocybe cubensis albino é uma variedade rara e única do famoso cogumelo psicodélico Psilocybe cubensis. O que mais chama atenção nesse cogumelo é que ele é branquinho, daí o nome "albino". Enquanto a maioria dos Psilocybe cubensis tem aquela vibe marrom ou acastanhada, o Psilocybe cubensis albino se destaca pela aparência diferentona.</p>
              <p>Esse camarada albino manda bem na substância psicoativa psilocibina, que é a responsável por te levar numa viagem psicodélica. Você pode esperar um passeio pelos sentidos, uma mudança na percepção e uma ligação profunda com o universo.</p>
              <p>Por conta de sua raridade e peculiaridades, o Psilocybe cubensis albino é um cogumelo que chama a atenção dos entusiastas do mundo psicodélico. Mas é importante frisar que, assim como com todos os cogumelos psicodélicos, usar o Psilocybe cubensis albino requer responsabilidade e um ambiente apropriado.</p>
              <p>Desidratado e pronto para consumo. Você pode optar em comer ou fazer o Lemon Tek, que acaba sendo umas das preferências devido ao sabor marcante do cogumelo in natura.</p>
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
              <p>Mais frete</p>
            </div>
          </div>
          
          {/* Slide 2 */}
          <div className="slide">
            <div className="selling-card">
              <h3>Kit Cultivo do Psilocybe cubensis albino</h3>
              <img className="imagens" src={kit} alt="Kit Cultivo" />
              <p>Imagine só, ter um kit mágico para você mesmo cultivar seu cogumelo. Cogumelar-se com total consciência e saber que foi sua energia, seu cultivo e sua vivência que deram vida e força para esse fungo.</p>
              <p>Esses kits são como um passaporte para a viagem psicodélica, com tudo que você precisa para cultivar seus cogumelos em casa. O truque é criar o ambiente certo e seguir as instruções para que esses caras cresçam direitinho.</p>
              <p>Mas ó, fica naquele alerta: não é só pegar o kit e sair cogumelando por aí. Você tem que ser responsável e consciente. Os efeitos dos cogumelos variam dependendo de como você cuida, do ambiente e do estado da sua mente naquele dia.</p>
              <p>Você vai receber o kit contendo o substrato já esterilizado e os esporos + a caixa organizadora e uma mentoria completa. Depois disso, é seguir as orientações da mentoria e curtir seu processo.</p>
              <p>Em média de 15 gramas à 20 gramas depois de desidratado e cuidando direitinho do seu kit você consegue mais duas colheitas.</p>
              <p>R$ 200,00</p>
              <p>Frete não incluso.</p>
            </div>
          </div>
          
          {/* Slide 3 */}
          <div htmlFor="card3" className="selling-card direita">
                       <div className="cabecalho">
                        <h3>Psilocybe cubensis Buffalo Pink</h3>
                       <img className="imagens"src={buffalo} alt="" />
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
                              <p> Mais Frete .</p>
                            </div>
                        </div>
                    </div>          <div htmlFor="card3" className="selling-card direita">
                       <div className="cabecalho">
                        <h3>Psilocybe cubensis Buffalo Pink</h3>
                       <img className="imagens"src={buffalo} alt="" />
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
                              <p> Mais Frete .</p>
                            </div>
                        </div>
                    </div>
          
          {/* Slide 4 */}
          {/* ... Código do Slide 4 ... */}
        </Slider>
      </div>
    </section>
  );
};

export default Take09;

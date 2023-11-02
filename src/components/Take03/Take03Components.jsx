import styled from 'styled-components';
import titulo from './universoMaiaTitulo.png'; // Certifique-se de substituir pelo caminho correto da sua imagem.

export const Take03Styled = styled.div`
    height: fit-content;
    // overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: normal;
    justify-content: space-around;
    @include breakpoint(medium){
        h1{
            font-size: 100px;
            
        }
        h2{
            font-size: 25px;
        }
    }

    // Adicione aqui quaisquer estilos que você tenha aplicado a .take03
`;

export const UniverseText = styled.h2`
  font-size: 100px;
        font-family:$font2;
        color:$secundary_color;
        padding: 5%;`;

export const Logo = styled.img.attrs({
    src: titulo,
    alt: 'Universo Maia',  // Lembre-se de sempre adicionar um atributo alt para acessibilidade
})`
    width: 70%;
    max-width: 1300px;
    height: auto;
    margin: 0;
    padding: 0;
    transform: translateY(20%);
`;

export const TopaText = styled.h1`
        margin-top: 3%;
        font-size: 200px;
        font-family: 'Major Mono Display';
        color: $secundary_color;
        text-align: center;
    // Adicione aqui quaisquer estilos que você tenha aplicado ao h1 com o id #topa
`;

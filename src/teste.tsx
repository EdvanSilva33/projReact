import styled from 'styled-components'

type BotaoProps = {
  principal: boolean

  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
  color: #fff;
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
`

function Teste() {
  return (
    <>
      <Botao principal>Clique aqui </Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo principal>Não clique aqui</BotaoPerigo>
    </>
  )
}

export default Teste

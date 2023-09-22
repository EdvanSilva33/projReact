import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Edvan Silva</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Edvan Silva
      </Paragrafo>
      <Descricao fontSize={12} tipo="principal">
        Programador Full Stack
      </Descricao>
      <BotaoTema onClick={props.trocaTema}> Trocar Tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar

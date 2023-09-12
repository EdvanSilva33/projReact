import Titulo from '../../../components/Titulo'
import Paragrafo from '../../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
      doloremque placeat tempora nesciunt dolorem eligendi. Incidunt, unde
      voluptates adipisci veritatis minus voluptatum modi at quod enim excepturi
      voluptas! Architecto, quibusdam?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=EdvanSilva33&show_icons=true&theme=radical" />
    </GithubSecao>
  </section>
)
export default Sobre

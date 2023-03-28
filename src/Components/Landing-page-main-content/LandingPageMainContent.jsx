import LandingPageCard from '../Landing-page-card/LandingPageCard'
import './LandingPageMainContent.scss'
export default function LandingPageMainContent() {
	return (
		<div className='landing-page-main-content-container'>
			<LandingPageCard
				texto='Conheça nossos'
				verde='desafios da semana'
				texto2='para te ajudar a
  subir no Ranking'
				textoPqn='Cada desafio contém uma pontuação para te ajudar a alcançar uma nova posição'
				btnTxt='Desafios Semanais'
				rota='/desafio'
			/>

			<LandingPageCard
				texto='Uma'
				verde='ampla seleção de materiais'
				texto2='para você evoluir no mundo da programação'
				textoPqn='Escolha entre nossos materiais online com novas adições publicadas mensalmente'
				botao='vazado'
				btnTxt='Materiais'
				rota='/playlist'
			/>
		</div>
	)
}

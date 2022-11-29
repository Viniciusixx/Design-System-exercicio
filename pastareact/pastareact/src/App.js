import { ChakraProvider } from '@chakra-ui/react'
import Cardzin from './componentes/Card';

function App() {
 const cards = [
  {
    "id": 1,
    "name": "Ix35",
    "year": "2018",
    "image": "https://p4.wallpaperbetter.com/wallpaper/500/994/333/2011-hyundai-ix35-wallpaper-preview.jpg",
    'text': 'Suspensão tipo McPherson e dianteira com barra estabilizadora, roda tipo independente e molas helicoidal.' ,
    'combustivel': 'Álcool',
    'class1':'farol de neblina',
    'class2':'teto solar',
    'class3':'piloto automático',
    'bg': 'green.300'
  },
  {
    "id": 2,
    "name": "Bugatti Chiron",
    "year": "2022",
    "image": "https://images4.alphacoders.com/705/thumb-1920-705509.jpg",
    'text': 'Cada uma das unidades foi vendida por 3,5 milhões de libras (R$ 19.648.231), isto antes dos opcionais e da personalização.' ,
    'combustivel': 'Gasolina',
    'class1':'Importado',
    'class2':'Injeção Multiponto',
    'class3':'disco de carbono-cerâmica',
    'bg': 'red.300'
  },
  {
    "id": 3,
    "name": "Camaro",
    "year": "2018",
    "image": "https://c4.wallpaperflare.com/wallpaper/687/31/583/hennessey-chevrolet-camaro-zl1-hpe1000-the-exorcist-wallpaper-preview.jpg", 
    'text': 'Curta Toda a Potência do Novo Camaro e Tenha à Disposição Componentes de Segurança. Performance na aceleração.',
    'combustivel': 'Gasolina',
    'class1':'piloto automático',
    'class2':'ajuste elétrico',
    'class3':'ABS',
    'bg': 'green.300'
  },

]

  

  return (
    <ChakraProvider>
      {cards.map((card)=>{
        return <Cardzin key={card.id} card={card}/>
      })}
    
    </ChakraProvider>
  ); 
}

export default App;

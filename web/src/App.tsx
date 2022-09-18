import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAtBanner';

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  },
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center m-20 my-20'>
      <img src={logoImg} alt='' />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title} 
              bannerUrl={game.bannerUrl} 
              adsCount={game._count.ads} 
            />
          )
        })}
      </div>

      <Dialog.Root>  
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-30' />

          <Dialog.Content className='fixed inset-0 flex items-center justify-center'>
            <Dialog.Title>Publique um anúncio</Dialog.Title>

            <Dialog.Content>
              Teste
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>  
      </Dialog.Root>
    </div>
  )
}

export default App

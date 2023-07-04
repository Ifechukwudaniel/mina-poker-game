
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import GradientBG from '../components/GradientBG.js';
import styles from '../styles/Home.module.css';
import MyForm from '@/components/Form';
import Seat from '@/components/Seat';
import Header from '@/components/Header';

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const { Mina, PublicKey } = await import('snarkyjs');
  //     // const { Add } = await import('../../../contracts/build/src/');

  //     // Update this to use the address (public key) for your zkApp account.
  //     // To try it out, you can try this address for an example "Add" smart contract that we've deployed to
  //     // Berkeley Testnet B62qkwohsqTBPsvhYE8cPZSpzJMgoKn4i1LQRuBAtVXWpaT4dgH6WoA.
  //     const zkAppAddress = '';
  //     // This should be removed once the zkAppAddress is updated.
  //     if (!zkAppAddress) {
  //       console.error(
  //         'The following error is caused because the zkAppAddress has an empty string as the public key. Update the zkAppAddress with the public key for your zkApp account, or try this address for an example "Add" smart contract that we deployed to Berkeley Testnet: B62qkwohsqTBPsvhYE8cPZSpzJMgoKn4i1LQRuBAtVXWpaT4dgH6WoA'
  //       );
  //     }
  //     //const zkApp = new Add(PublicKey.fromBase58(zkAppAddress))
  //   })();
  // }, []);

  return (
    <>
      <Head>
        <title>Poker ZK DApp</title>
        <meta name="description" content="Online Poker DApp which uses ZK proof" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <main className={`bg-gray-900 h-full w-full text-white bg-[url('/assets/poker-table.png')] bg-auto bg-center absolute px-10`} >
       <Header />
       <div className='py-20 px-10 flex justify-between relative'>
        <div className='absolute left-60'>
        <Seat id={1}  />
        </div>
        <div className='absolute right-60'>
        <Seat id={2}  />
        </div>
        <div className='absolute top-72'>
        <Seat id={3}  />
        </div>
        <div className='absolute right-10 top-72'>
        <Seat id={4}  />
        </div>
        <div className={`absolute left-60 ${styles.topm}`}>
        <Seat id={5}  />
        </div>
        <div className={`absolute right-60 ${styles.topm}`}> 
        <Seat id={6}  />
        </div>
       </div>
       <div className='p-10 text-center'>Pool Amount</div>
       <div className='flex space-x-4 justify-center'>
        <Image src={'/assets/Cards/2c.png'} width={75} height={125} alt='card-1' />
        <Image src={'/assets/card.png'} width={75} height={125} alt='card-1' />
        <Image src={'/assets/card.png'} width={75} height={125} alt='card-1' />
        <Image src={'/assets/card.png'} width={75} height={125} alt='card-1' />
       </div>
        </main>
    </>
  );
}

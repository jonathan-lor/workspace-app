import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect} from 'react'
import * as Realm from 'realm-web'

const Home: NextPage = () => {

  const [pokemon, setPokemon] = useState([])

  useEffect( () => {
    const REALM_APP_ID = "iv-calculator-aiopl";
    const app = new Realm.App({id: REALM_APP_ID});
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allPokemon = await user.functions.getAllPokemon();
      setPokemon(allPokemon)
    } catch (error) {
      console.error(error);
    }
    const genRandomKey = async () => {
      console.log(await ecc.randomKey())
    };
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {/*products*/}
      </main>

    </div>
  )
}

export default Home

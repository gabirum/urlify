import axios from 'axios'
import React, { useState } from 'react'
import { withApplication } from '~/Application'
import { AddressItem } from '~/components/AddressItem'
import { Button } from '~/components/Button'
import { Copyable } from '~/components/Copyable'
import { TextField } from '~/components/TextField'

const Home = () => {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState<string | null>(null)

  const shortenUrl = async () => {
    try {
      const {
        data: { shortenUrl },
      } = await axios.post('links', { url })

      setShortUrl(shortenUrl)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className='home relative flex flex-col w-full min-h-screen'>
        <div className='gradient-ball-1' />
        <div className='gradient-ball-2' />
        <header className='flex justify-between items-center px-8 py-4'>
          <span className='font-display text-3xl'>URLIFY</span>
          <Button>logar</Button>
        </header>
        <main className='flex-1 flex flex-col z-10'>
          <section className='flex-1 flex flex-col justify-center items-center gap-4'>
            <p className='text-6xl font-bold'>Encurte URL&apos;s. Gere QRCodes.</p>
            <Button>comece de graça</Button>
          </section>
          <section className='w-full right-0 bottom-0 left-0 bg-[#131319] dark:bg-slate-100 px-8 py-4'>
            <div className='flex mb-2 h-11'>
              <TextField
                aria-label='Encurtar link'
                placeholder='Encurte seu link'
                containerClassName='flex-1'
                className='h-11'
                onChange={setUrl}
                value={url}
              />
              <Button className='ml-2 h-11' onPress={shortenUrl}>
                encurtar
              </Button>
            </div>
            {shortUrl ? <Copyable autoFocus message={shortUrl} /> : null}
          </section>
        </main>
      </div>
      <footer className='relative grid place-items-center grid-cols-2 py-6 right-0 bottom-0 left-0 z-10 bg-[#0C0C0F] text-neutral-100 dark:bg-[#EDEDED] dark:text-neutral-800'>
        <AddressItem name='Tiagogp-exe' message='Design by' href='https://github.com/tiagogp-exe' />
        <AddressItem name='Gabirum' message='Developed by' href='https://github.com/gabirum' />
      </footer>
    </>
  )
}

export default withApplication(Home)

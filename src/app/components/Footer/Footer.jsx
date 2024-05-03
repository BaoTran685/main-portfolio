import Image from 'next/image'
import React from 'react'

import LinkWrapper from '../LinkWrapper'
const GITHUB = 'https://github.com/BaoTran685'
const LINKED_IN = 'https://www.linkedin.com/in/bao-tran-721a0a307/'

const Footer = () => {
  return (
    <footer className='footer border-t border-t-[#ddd]'>
      <div className='flex flex-col items-center justify-center space-y-2 p-10'>
        <div className='flex flex-row space-x-2'>
          <LinkWrapper webUrl={GITHUB}>
            <Image
              src='/images/github_mark.png'
              alt='github logo'
              width={300}
              height={300}
              className='w-10 h-10'
            ></Image>
          </LinkWrapper>
          <LinkWrapper webUrl={LINKED_IN}>
            <Image
              src='/images/linked_in.png'
              alt='linked_in logo'
              width={300}
              height={300}
              className='w-11 h-10'
            ></Image>
          </LinkWrapper>
        </div>

        <p className='text-slate-600'>2024 Copyright Bao Tran</p>
      </div>
    </footer>
  )
}

export default Footer

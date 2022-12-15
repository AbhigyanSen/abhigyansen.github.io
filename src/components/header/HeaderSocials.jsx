import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="abc"><BsLinkedin/></a>
        <a href="https://github.com" target="abc"><FaGithub/></a>
        <a href="https://twitter.com" target="abc"><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials
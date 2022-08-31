import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/dhairya-kumar-jain-3bb1b8203/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/dhairyajain571" target="_blank"><BsGithub /></a>
        <a href="https://www.instagram.com/_dhairya__j?r=nametag" target="_blank"><BsInstagram /></a>

    </div>
  )
}

export default HeaderSocials
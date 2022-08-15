import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="#linkednin" target="_blank"><BsLinkedin /></a>
        <a href="#github" target="_blank"><BsGithub /></a>
        <a href="#insta" target="_blank"><BsInstagram /></a>

    </div>
  )
}

export default HeaderSocials
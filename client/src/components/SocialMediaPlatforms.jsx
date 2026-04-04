import React from 'react'
import { Link } from 'react-router-dom'
import { socials } from '../data/socials';

import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

const iconByPlatform = {
  youtube: FaYoutube,
  tiktok: FaTiktok,
  instagram: FaInstagram
}

const sizeMap = {
  sm: 50,
  md: 20,
  lg: 28.
}

const SocialMediaPlatforms = (
  size = 'md', // options: sm, md, lg
  iconSize, // number, overrides size preset
  className = '',
  buttonClassName = '',
) => {
  const resolvedSize = size ? sizeMap[size] : sizeMap.md;
  
  return (
    <div className={`flex flex-row items-center justify-center gap-3 ${className}`}>
      {socials.map(({ platform, link }) => {
        const Icon = iconByPlatform[platform];
        if (!Icon) return null; // platform does not have mapping

        return (
          <a
            key={platform}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={platform}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white hover:bg-white/10 ${buttonClassName}`}
          >
            <Icon size={resolvedSize} />
          </a>
        )

      })}

    </div>
  )
}

export default SocialMediaPlatforms
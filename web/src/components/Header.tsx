import React from 'react'
import { Button, Typography } from '@mui/material'

export interface HeaderProps {
  title: string
  subtitle?: string
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <header className="sticky top-0 z-20">
    <div className="flex items-center justify-between px-6 py-4 border-b border-transparent bg-gradient-to-r from-white to-white/80 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 shadow-md flex items-center justify-center text-white font-bold">NC</div>
        <div>
          <Typography variant="h6" className="font-semibold">{title}</Typography>
          {subtitle && <Typography variant="caption" className="text-gray-500 -mt-1">{subtitle}</Typography>}
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-2">
        <Button variant="contained" size="small" color="primary" onClick={() => alert('Placeholder action')}>New chat</Button>
        <Button variant="outlined" size="small" onClick={() => alert('Placeholder settings')}>Settings</Button>
      </div>
    </div>
  </header>
)

export default Header

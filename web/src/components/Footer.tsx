import React from 'react'

export type FooterProps = object

const Footer: React.FC<FooterProps> = () => (
  <footer className="p-4 text-center text-sm text-gray-500">
    <span>© {new Date().getFullYear()} News Context — prototype UI</span>
  </footer>
)

export default Footer

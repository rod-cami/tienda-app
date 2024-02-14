import React from 'react'

export const Icons = [
  { name: 'github', link: 'https://github.com/rod-cami/tienda-app' },
  { name: 'browser-chrome', link: '' }
]

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span className='my-auto'>© 2023 Tienda App. Ingeniería de Software UTN-FRT.</span>
        <span className='my-auto'>Rodriguez Camila, Depétris Lucas, Palma Rocio</span>
        <div className="text-teal-500 m-auto">
          {Icons.map((icon) => (
            <span
              key={icon.name}
              className="p-2 cursor-pointer inline-flex items-center
            rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
            duration-300"
            >
            <i className={`bi bi-${icon.name} m-0 p-0`}></i>
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}

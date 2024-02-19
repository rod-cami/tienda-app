import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons'

export const Icons = [
  { name: 'github', componente: <FontAwesomeIcon icon={faGithub}/>, link: 'https://github.com/rod-cami/tienda-app' },
  { name: 'browser-chrome', componente: <FontAwesomeIcon icon={faChrome} />, link: 'https://github.com/rod-cami/tienda-app' }
]

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-center pt-2 text-gray-400 text-sm pb-3">
        <span className='my-auto'>© 2023 Tienda App. Ingeniería de Software UTN-FRT.</span>
        <div className="text-teal-500">
          {Icons.map((icon) => (
            <span
              key={icon.name}
              className="p-2 cursor-pointer inline-flex items-center
            rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
            duration-300"
            >
            <a className='m-0 p-0' href={icon.link}>{icon.componente}</a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}

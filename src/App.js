import { NavLink, Outlet } from 'react-router-dom'

function App () {

  const activeNavLink = ({ isActive }) => isActive ? 'underline' : undefined

  return (
    <div className='md:max-w-lg max-w-md mx-auto'>
      <div className='flex justify-evenly'>
        <NavLink to='learn' className={activeNavLink}>Learn</NavLink>
        <NavLink to='practice' className={activeNavLink}>Practice</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default App

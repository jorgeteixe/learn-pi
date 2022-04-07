import { Navigate, NavLink, Outlet, useLocation } from 'react-router-dom'

function LearnPi() {
  const defaultClass = 'py-2 px-4 rounded-md'
  const activeNavLink = ({ isActive }) =>
    defaultClass + ' ' + (isActive ? 'bg-gray-300' : undefined)
  const { pathname } = useLocation()

  if (pathname === '/') return <Navigate to="/learn" />

  return (
    <div className="md:max-w-lg max-w-md mx-auto">
      <div className="flex justify-evenly text-xl px-10 my-4">
        <NavLink to="learn" className={activeNavLink}>
          🧑‍🏫 Learn
        </NavLink>
        <NavLink to="practice" className={activeNavLink}>
          📝 Practice
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default LearnPi

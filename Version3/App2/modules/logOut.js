import React from 'react'
import NavLink from './NavLink'


class LogOut extends React.Component{
  render() {
    return (
      <form action="http://localhost:3000/logout" method='POST'></form>
    )
  }
}

export default LogOut
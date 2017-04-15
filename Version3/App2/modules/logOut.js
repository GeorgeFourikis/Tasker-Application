import React from 'react'
import NavLink from './NavLink'


class LogOut extends React.Component{
	handleCLick() {
		localStorage.setItem("token", "")
	}
	render() {
		return (
	  		<a href = "#">Log Out</a>
		)
	}
}

export default LogOut
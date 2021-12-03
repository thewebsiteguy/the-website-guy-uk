import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

export default function SideBar({pageWrapId, outerContainerId}) {
  return (
    <div>
      <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId} width={ '280px' }>
      <Link to='/'>Testing</Link>
      <Link to='/'>Testing</Link>
      <Link to='/'>Testing</Link>
      <Link to='/'>Testing</Link>
      </Menu>
    </div>
  )
}

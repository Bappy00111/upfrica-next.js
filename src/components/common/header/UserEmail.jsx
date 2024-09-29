
'use client'
import React from 'react'
import { FiUserPlus } from 'react-icons/fi';

const UserEmail = () => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
  return (
      <div>
             <div className="flex items-center">
              <FiUserPlus className="h-8 w-8 text-purple-500" />
              {!user && <span className="ml-2 font-bold">Please login!</span>}
              {user && <span className="ml-2 font-bold">{user?.user?.email}</span>}
            </div>
    </div>
  )
}

export default UserEmail
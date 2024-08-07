import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';

const Navbar = () => {

  const dispatch = useDispatch();
  return(
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
      <div>
        <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className='text-2xl font-bold'>Treats Foods</h1>
      </div>
      <div>
      <SuprSendInbox
        bellComponent={() => <Bell></Bell>}
        theme={{ badge: { backgroundColor: 'red' } }}
        themeType={theme}
        workspaceKey={process.env.NEXT_PUBLIC_SUPRSEND_WORKSPACE_KEY}
        subscriberId={props.subscriber_id}
        distinctId={props.distinct_id}/>
        <input 
          type="search" 
          name="search" 
          id="" 
          placeholder='search here' 
          autoComplete='off'
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className='py-3 border border-gray-500 text-sm rounded-lg outline-none w-full lg:w-[25vw]' />
      </div>
    </nav>
  )
}

export default Navbar;
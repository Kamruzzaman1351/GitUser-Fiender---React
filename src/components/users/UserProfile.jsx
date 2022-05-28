import React from 'react';
import { Link } from "react-router-dom";
import { FaUsers, FaUserFriends, FaStore, FaCodepen } from "react-icons/fa"

function UserProfile() {
  return (
    <>
      <div className='w-full mx-auto lg:w10/12'>
        <div className='mb-4'>
          <Link to="/" className='btn btn-ghost'>
            Back To Home
          </Link>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full'>
              <figure>
                <img src="#" alt='Avater' />
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0'>
                  Kamruzzaman
                </h2>
                <p>User Name</p>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                Kamruzzaman
                <div className='ml-2 mr-1 badge badge-success'>
                  User Name
                </div>
                <div className='mx-1 badge badge-info'>
                  Hireable
                </div>
              </h1>
              <p>Bio</p>
              <div className='mt-4 card-actions'>
                  <a href="#" target="_blank" rel='noreferrer' className='btn btn-outline'>
                      Visit Github Profile
                  </a>
              </div>
            </div>
            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
              <div className='stat'>
                <div className='stat-title text-md'>
                  Location
                </div>
                <div className='text-lg stat-value'>Location</div>
              </div>
              <div className='stat'>
                <div className='stat-title text-md'>
                  Website
                </div>
                <div className='text-lg stat-value'>Website</div>
              </div>
              <div className='stat'>
                <div className='stat-title text-md'>
                  Twitter
                </div>
                <div className='text-lg stat-value'>Twitter</div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
          <div className='stat'>
              <div className='stat-figure text-secondary'>
                  <FaUsers className='text-3xl md:text-5xl'/>
              </div>
              <div className='stat-title pr-5'>
                  Followers    
              </div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                  Followers
              </div>
          </div>
          <div className='stat'>
              <div className='stat-figure text-secondary'>
                  <FaUserFriends className='text-3xl md:text-5xl'/>
              </div>
              <div className='stat-title pr-5'>
                  Following    
              </div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                Following
              </div>
          </div>
          <div className='stat'>
              <div className='stat-figure text-secondary'>
                  <FaCodepen className='text-3xl md:text-5xl'/>
              </div>
              <div className='stat-title pr-5'>
                  Public Repos    
              </div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                Public Repos
              </div>
          </div>
          <div className='stat'>
              <div className='stat-figure text-secondary'>
                  <FaStore className='text-3xl md:text-5xl'/>
              </div>
              <div className='stat-title pr-5'>
                  Public Gists    
              </div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                Public Gists
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
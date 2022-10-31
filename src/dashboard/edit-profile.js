import React, { useEffect, useState } from 'react'
import Header from '../pages/header';
import EditProfileForm from './edit-profile-form';
import Sidebar from './sidebar';


const EditProfile = () => {

    return(
<>
<div className='box shadow bg-dark is-flex justify-between align-center'>
<h3 className='is-bold is-title is-size-4 text-title'>Setting</h3>
<div className='is-flex align-center'>
<button className='button is-link is-small'>Edit Profile</button>
<button className='button is-outlined is-small'>Edit Site</button>
</div>
</div>
{/* END TABS PANEL */}

<EditProfileForm />
</>
    )
}


export default EditProfile;



import React, { useEffect, useState } from 'react'
import Header from '../pages/header';
import EditProfileForm from './edit-profile-form';
import Sidebar from './sidebar';


const EditProfile = () => {

    return(
<div className='column'>
<div className='box shadow bg-dark '>
<h3 className='is-bold is-title is-size-4 text-title'>Edit Profile</h3>
</div>
<EditProfileForm />
</div>
    )
}


export default EditProfile;



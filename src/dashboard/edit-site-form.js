import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App';
import supabase from '../supabase-config';
import UploadAvatar from './edit-avatar.js';
import ErrorMessage from './error-message';

const EditSiteForm = (props) => {
const {value} = useContext(AppContext)

    return(
 <div className='px-5 text-white bg-dark py-2'>
<UploadAvatar id={value.data.uid} data={value.data}/>
{/* END UPLOAD INPUT */}
<form className='is-flex is-flex-direction-column is-flex-gap-lg ' onSubmit={`updateProfiles`}>
<div class="field">
<label class="label text-white">Fullname</label>
<div class="control">
<input class="input  is-link has-text-dark" type="text" name='fullname' defaultValue={value.data.fullname} onChange={ handlerChange }/>
</div>
</div>

<div class="field">
<label class="label text-white">Username</label>
<div class="control">
<input class="input  is-link" type="text" name='username' defaultValue={value.data.username} onChange={ `handlerChange `}/>
</div>
</div>

<div class="field">
<label class="label text-white">Site title</label>
<div class="control">
<input class="input  is-link" type="text" name='website_name' defaultValue={value.data.site_title} onChange={handlerChange}/>
</div>
</div>

<ErrorMessage pesan={message.pesan} isError={message.error} sukses={message.sukses}/>

<div class="field">
{message.isSubmit ? <button class="button is-info" type='submit' title="Disabled button" >Submit</button> :
<button class="button is-info" title="Disabled button" disabled>Submit</button>}
</div>
 </form>
   </div>
    )
}

export default EditSiteForm;

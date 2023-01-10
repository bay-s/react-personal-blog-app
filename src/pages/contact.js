import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import supabase from '../supabase-config'


const Contact = () => {
  const {value} = useContext(AppContext)
  const [contact,setContact] = useState({
    email:'',
    adress:'',
    city:'',
    phone:''
   })

  useEffect(() => {
    getContact()
  },[])

  const getContact = async () => {

  const { data, error } = await supabase
  .from('contact_info')
  .select()
  .eq('user_id',value.data.uid)
  if(error) console.log(error.message)
  else {
    console.log(data)
    const contacts = data.map(item => {
      return setContact({...contact,
          email:item.email,
          adress:item.adress,
          phone:item.phone,
          city:item.city
         })
  })
  }
}

    return(
       <div className='about p-50' id='contact'>
       <div className='is-flex align-center is-flex-gap-xl mb-6 px-6'>
       <i class="fa fa-envelope text-white icons" aria-hidden="true"></i>
       <p className='has-text-white-ter is-size-5'>
       Here is where you should write your message to readers to have them get in contact with you.
       </p>
       </div>
          <section className='columns is-multiline'>
             <article className='column is-6 px-5'>
<form className='is-flex-column is-flex-gap-md'>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label has-text-white-ter">Subject</label>
  </div>
  <div class="field-body">
    <div class="field">
      <input class="input bg-transparent is-primary is-medium" type="text"  />
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label has-text-white-ter">Subject</label>
  </div>
  <div class="field-body">
    <div class="field">
      <input class="input bg-transparent is-primary is-medium" type="text"  />
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label has-text-white-ter">Subject</label>
  </div>
  <div class="field-body">
    <div class="field">
      <input class="input bg-transparent is-primary is-medium" type="text"  />
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label has-text-white-ter">Question</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea class="textarea bg-transparent is-primary is-medium" ></textarea>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">

  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary">
          Send message
        </button>
      </div>
    </div>
  </div>
</div>

</form>
</article>
{/* END COLUMN LEFT */}
             <article className='column is-6 px-5 is-flex-column is-flex-gap-md'>
             <div className='is-flex-column is-flex-gap-sm'>
  <h3 className='text-white is-title is-bold'> Address and Phone</h3>
<ul className='is-flex-column is-flex-gap-sm has-text-white-ter'>
 <li className='is-flex align-center is-flex-gap-md'>
   <span className='is-title'>Email : </span>
  {contact.email}
  </li>
<li className='is-flex align-center is-flex-gap-md'>
<span className='is-title'>Citeh : </span>
{contact.city}
 </li>
 <li className='is-flex align-start is-flex-gap-md'>
 <span className='is-title'>Adress:</span>
  <span>  {contact.adress}</span>
  </li>
  <li className='is-flex align-center is-flex-gap-md'>
 <span className='is-title'>Phone :</span>
 <span className='is-title'>{contact.phone === '' ? '' : `0${contact.phone}`}</span>
 </li>
</ul>
 </div>

 <div className='is-flex-column is-flex-gap-sm'>
  <h3 className='text-white is-title is-bold'>  Latest Tweets</h3>
  <p className='lh-md has-text-white-ter'>
  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsumhttp://t.co/CGIrdxIlI3
2 Days Ago
  </p>
  <p className='lh-md has-text-white-ter'>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasihttp://t.co/CGIrdxIlI3
3 Days Ago
  </p>
 </div>



             </article>
             {/* END COLUMN RIGHT  */}
          </section>
       </div>
    )
}

export default Contact
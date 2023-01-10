import supabase from "../supabase-config";

export  async function getContact(id){

  const { data, error } = await supabase
  .from('contact_info')
  .select()
  .eq('user_id',id)
  if(error) console.log(error.message)
  else {
    console.log(data)
    return data
  }
}

export  async function  getSkills(id){

  const { data, error } = await supabase
  .from('skills')
  .select()
  .eq('user_id',id)
  if(error) console.log(error.message)
  else {
    console.log(data)
    return data
  }
}


export  async function getAbout(id){

  const { data, error } = await supabase
  .from('about')
  .select()
  .eq('user_id',id)
  if(error) console.log(error.message)
  else {
    console.log(data)
    return data
  }
}


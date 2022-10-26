import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import supabase from '../supabase-config'

const Author = (props) => {
    
    const [userComment,setUserComment] = useState([])
     useEffect(() => {
        const getUserComment = async () => {
            const id = props.id
            const {data,err} = await supabase.from('users')
            .select()
            .eq('uid',id)
            if(data){
                setUserComment(data)
            }
            if(err) console.log(err);
        }
        getUserComment()

    },[])



    return(
userComment.length < 1 ? "" : userComment.map(m => {
    return <div className='is-flex align-center is-flex-gap-md avatars'>
    <Link to={`/profile/${m.uid}`} className='has-text-info is-size-7 is-title'>{m.username}</Link>
</div>
})
    )
}

export default Author;


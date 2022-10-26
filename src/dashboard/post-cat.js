import { Link } from "react-router-dom";



const PostCat = (props) => {

    return(
        props.cat.length < 1 ? "" : props.cat.map(cats => {
            return <Link to={`/post/category-name/${cats}`} className='is-size-7 has-text-info'>{cats},</Link>
        })
    )
}

export default PostCat;
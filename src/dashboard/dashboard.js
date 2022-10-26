import React, { useContext } from 'react'
import { useParams ,Navigate} from 'react-router-dom';
import Header from '../pages/header';
import Category from './category';
import EditProfile from './edit-profile';
import Main from './main';
import Menus from './menus';
import Page from './pages';
import Posts from './posts';
import Sidebar from './sidebar';


const DashBoard = () => {
const {id} = useParams()
const string_id = id.toString().toLowerCase()

    return( 
<div id="app">
<Header />
<div class="container is-fluid my-5 pt-3">
<div className='columns is-multiline'>
{/* START SIDEBAR */}
<div className='column is-2 bg-dark'>
<Sidebar />
</div>
{/* END SIDEBAR */}
<div className='column'>
<div className={string_id === 'index' ? 'box bg-dark shadow' : 'hide' }>
<h3 className='is-bold is-title is-size-4 text-title capital'>{string_id === 
'index' ? "Dashboard" : string_id}</h3>
</div>
{string_id === 'index' ?  <Main />  : ""}
{string_id === 'posts' ?  <Posts />  : "tidak"}
{string_id === 'pages' ?  <Page />  : "tidak"}
{string_id === 'category' ?  <Category />  : "tidak"}
{string_id === 'edit-profile' ? <EditProfile /> : ""}
{string_id === 'menus' ? <Menus /> : ""}
</div>
{/* END CONTETN */}

{/* END COLUMN RIGHT */}
</div>
{/* END COLUMNS */}
</div>
{/* END CONTAINER */}
</div>

    )
}

export default DashBoard;
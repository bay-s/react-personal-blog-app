import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createContext, useEffect, useState } from "react"
import supabase from "./supabase-config"
import DashBoard from "./dashboard/dashboard"
import Home from "./pages/Home"
import CreatePost from "./dashboard/create-post"
import LoginPage from "./dashboard/login"
import RegisterPages from "./dashboard/register"
import Pages from "./pages/pages"
import CreatePage from "./dashboard/create-pages"
import NotFound from ".//pages/404not"
import PostDetail from "./pages/post"
import EditPost from "./dashboard/edit-post"
import EditPage from "./dashboard/edit-page"
import GetPost from "./dashboard/get-post-by"
import PostByCategory from "./pages/post-by-category"
import SearchResult from "./pages/search-result"




export const AppContext = createContext()

function App() {
  const [users,setUsers] = useState([]);
  const [isLogin,setIsLogin] = useState(false)
  const [open,setOpen] = useState(false)
  const [data,setData] = useState([])

  useEffect(() => {
    const user = getUsers()

    supabase.auth.onAuthStateChange((event, session) => {
      if (event == 'SIGNED_IN') {
        // console.log('SIGNED_IN', session)
        const { data, error } = supabase.auth.setSession(session.refresh_token)
        // setIsLogin(true)
        setUsers(user)
        console.log("log int");
        // console.log(session.refresh_token);
      }
      if (event == 'TOKEN_REFRESHED') {
        // console.log('TOKEN_REFRESHED', session)
        const { data, error } = supabase.auth.setSession(session.refresh_token)
        // console.log(session.refresh_token);
      }
      if (event == 'SIGNED_OUT') {
        setIsLogin(false) 
        window.location.href = "/";
        console.log("logout");
      }
    })

  },[])

  const openModal = e => {
    e.preventDefault()
    setOpen(!open)
  }

  const getUsers = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if(user){
      console.log("user logged in");
      console.log(user);
      setUsers(user)
    }else{
      console.log("not login");
      setIsLogin(false)
    }
    const check =  user ? fetchData(user.id) :  setIsLogin(false)
  }

  const fetchData = async (id) => {
    const {data,error} = await supabase
    .from('users')
    .select()
    .eq('uid',id)
    .single()
    if(error){
      console.log(error);
    }
    if(data){
      setData(data)
      const check = data.is_admin ? setIsLogin(true)  : setIsLogin(false) 
    }
  }

  const value = {
    data,
    users,
    openModal,
    isLogin
  }

  return (
<AppContext.Provider value={{value}}>
<BrowserRouter>
      {/* <Headers /> */}
      <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/post/:id' element={<PostDetail />} /> 
      <Route path='/dashboard/:id' element={isLogin ? <DashBoard /> : <LoginPage  isLogin={isLogin}/>} />
      <Route path='/dashboard/create-post/' element={isLogin ? <CreatePost /> : <LoginPage  isLogin={isLogin}/>} />
      <Route path='/dashboard/create-page/' element={isLogin ? <CreatePage /> : <LoginPage  isLogin={isLogin}/>} />
      <Route path='/dashboard/edit-post/:id' element={isLogin ? <EditPost /> : <LoginPage  isLogin={isLogin}/>} />
      <Route path='/dashboard/edit-page/:id' element={isLogin ? <EditPage /> : <LoginPage  isLogin={isLogin}/>} />
      <Route path='/posts/:id' element={<SearchResult />} />
      <Route path='/pages/:id' element={<Pages />} />
      <Route path='/post/category-name/:id' element={<GetPost />} />
      <Route path='/posts/category-name/:id' element={<PostByCategory />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/login/' element={<LoginPage isLogin={isLogin}/>} />
      <Route path='/register/' element={<RegisterPages  />} />
      </Routes>

    </BrowserRouter>
</AppContext.Provider>

  );
}

export default App;



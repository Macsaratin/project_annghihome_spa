import Dashboard from '../pages/admin/Dashboard';
//
import HeaderPage from '../pages/admin/header/HeaderPage';
import HeaderTrash from '../pages/admin/header/HeaderTrash'; 
import HeaderEdit from '../pages/admin/header/HeaderEdit'; 
//
import FooterPage from '../pages/admin/footer/FooterPage';
import FooterTrash from '../pages/admin/footer/FooterTrash';
import FooterEdit from '../pages/admin/footer/FooterEdit';
//
import BlogPage from '../pages/admin/blog/BlogPage';
import BlogEdit from '../pages/admin/blog/BlogEdit';
//
import ProductPage from '../pages/admin/product/ProductPage';
import ProductTrash from '../pages/admin/product/ProductTrash';
import ProductEdit from '../pages/admin/product/lib/editform';
//
import CategoryPage from '../pages/admin/category/CategoryPage';
import CategoryTrash from '../pages/admin/category/CatrgoryTrash';
//
import IntroPage from '../pages/admin/intro/IntroPage';
import IntroTrash from '../pages/admin/intro/IntroTrash';


const RouterAdmin = [
    { path: "/admin", element: <Dashboard /> },
    //
    { path: "/admin/header", element: <HeaderPage /> },
    { path: "/admin/header/trash", element: <HeaderTrash /> },
    { path: "/admin/header/edit", element: <HeaderEdit /> },
    //
    { path: "/admin/footer", element: <FooterPage /> },
    { path: "/admin/footer/edit", element: <FooterEdit /> },
    { path: "/admin/footer/trash", element: <FooterTrash /> },
    //
    { path: "/admin/blog", element: <BlogPage /> },
    { path: "/admin/blog/edit", element: <BlogEdit /> },
    //
    {path:"/admin/product",element:<ProductPage/>},
    {path:"/admin/product/create",element:<ProductPage/>},
    {path:"/admin/product/trash",element:<ProductTrash/>},
    {path:"/admin/product/edit",element:<ProductEdit/>},
    //
    {path:"/admin/category",element:<CategoryPage/>},
    {path:"/admin/category/trash",element:<CategoryTrash/>},
    //
    {path:"/admin/intro",element:<IntroPage/>},
    {path:"/admin/intro/trash",element:<IntroTrash/>},














];
    

export default RouterAdmin;
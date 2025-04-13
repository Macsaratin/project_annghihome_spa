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
import BlogTrash from '../pages/admin/blog/BlogTrash';
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
//
import ContactPage from '../pages/admin/contact/ContactPage';
import ContactTrash from '../pages/admin/contact/ContactTrash';
//
import ServicePage from '../pages/admin/service/ServicePage';
import ServiceTrash from '../pages/admin/service/ServiceTrash';
//
import ImagePage from '../pages/admin/image/ImagePage';
import ImageTrash from '../pages/admin/image/ImageTrash';
//
import SliderPage from '../pages/admin/banner/SliderPage';
import SliderTrash from '../pages/admin/banner/SliderTrash';
//
import AboutPage from '../pages/admin/about/AboutPage';
import AboutTrash from '../pages/admin/about/AboutTrash';
//
import StorePage from '../pages/admin/store/StorePage';
import StoreTrash from '../pages/admin/store/StoreTrash';
//
import TeamPage from '../pages/admin/teams/TeamPage';
import TeamTrash from '../pages/admin/teams/TeamTrash';
//
import PartnerPage from '../pages/admin/partner/PartnerPage';
import PartnerTrash from '../pages/admin/partner/PartnerTrash';
//
import StoreInforPage from '../pages/admin/storeinfor/StoreInforPage';
import StoreInforTrash from '../pages/admin/storeinfor/StoreInforTrash';
//
import PolicyPage from '../pages/admin/policy/PolicyPage';
import PolicyTrash from '../pages/admin/policy/PolicyTrash';
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
    { path: "/admin/blog/trash", element: <BlogTrash /> },
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
    //
    {path:"/admin/contact",element:<ContactPage/>},
    {path:"/admin/contact/trash",element:<ContactTrash/>},
    //
    {path:"/admin/service",element:<ServicePage/>},
    {path:"/admin/service/trash",element:<ServiceTrash/>},
    //
    {path:"/admin/image",element:<ImagePage/>},
    {path:"/admin/image/trash",element:<ImageTrash/>},
    //
    {path:"/admin/slider",element:<SliderPage/>},
    {path:"/admin/slider/trash",element:<SliderTrash/>},
    //
    {path:"/admin/about",element:<AboutPage/>},
    { path: "/admin/about/trash", element: <AboutTrash /> },
    //
    { path: "/admin/store", element: < StorePage /> },
    { path: "/admin/store/trash", element: < StoreTrash /> },
    //
    { path: "/admin/team", element: < TeamPage /> },
    { path: "/admin/team/trash", element: < TeamTrash /> },
    //
    { path: "/admin/partner", element: < PartnerPage /> },
    { path: "/admin/partner/trash", element: < PartnerTrash /> },
    //
    { path: "/admin/storeinfor", element: < StoreInforPage /> },
    { path: "/admin/storeinfor/trash", element: < StoreInforTrash />},
    //
    { path: "/admin/policy", element: < PolicyPage /> },
    { path: "/admin/policy/trash", element: < PolicyTrash /> },
    //








];
    

export default RouterAdmin;
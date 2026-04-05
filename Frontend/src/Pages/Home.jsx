import AdminLayout from "../Admin/Components/AdminLayout"
import Footer from "../Components/Footer"
import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import PostLists from "../Components/PostLists"
import PostsFilters from "../Components/PostsFilters"
import BlogDetail from "./BlogDetail"

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <PostsFilters />
            <PostLists />
            <Footer /> 
            {/* <BlogDetail /> */}
            {/* <AdminLayout /> */}
        </>
    )
}

export default Home

import Footer from "../Components/Footer"
import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import PostLists from "../Components/PostLists"
import PostsFilters from "../Components/PostsFilters"

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <PostsFilters />
            <PostLists />
            <Footer />
        </>
    )
}

export default Home

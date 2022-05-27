import { FaHome } from "react-icons/fa";
import { BsEmojiFrown } from "react-icons/bs";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="hero">
        <div className="text-center hero-content content-center">
            <div className="max-w-lg">
                <div className="">
                    <BsEmojiFrown className="text-9xl font-bold text-center mx-auto" />
                </div>
                <h1 className="text-8xl font-bold mb-8">
                    Oops!
                </h1>
                <p className="text-5xl mb-8">404 - Page Not Found</p>
                <Link to="/" className="btn btn-primary btn-lg">
                    <FaHome className="mr-3"/>
                    Back To Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound
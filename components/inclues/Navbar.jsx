import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo"><Link href="/"><a>ReactJS</a></Link></div>
                <div className="navleft">
                    <ul>
                        <li><Link href="/docs/getting-started"><a>Docs</a></Link></li>
                        <li><Link href="/tutorial/tutorial"><a>Tutorial</a></Link></li>
                        <li><Link href="/blog/blog"><a>Blog</a></Link></li>
                        <li><Link href="/community/community"><a>Community</a></Link></li>
                    </ul>
                </div>
                <div className="navright">
                    <ul>
                        <li><Link href="/versions"><a>V17.0.3</a></Link></li>
                        <li><Link href="/languages"><a>Languages</a></Link></li>
                        <li><a href="https://github.com/facebook/react/" target="_blank">Github</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

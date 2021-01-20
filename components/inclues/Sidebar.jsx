import Link from 'next/link'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <ol>
                <li><Link href="#"><a>Introducing Hooks</a></Link></li>
                <li><Link href="#"><a>Hooks at a Glance</a></Link></li>
                <li><Link href="#"><a>Using the State Hook</a></Link></li>
                <li><Link href="#"><a>Using the Effect Hook</a></Link></li>
                <li><Link href="#"><a>Rules of Hooks</a></Link></li>
                <li><Link href="#"><a>Building Your Own Hooks</a></Link></li>
                <li><Link href="#"><a>Hooks API Reference</a></Link></li>
                <li><Link href="#"><a>Hooks FAQ</a></Link></li>
            </ol>
        </div>
    )
}

export default Sidebar
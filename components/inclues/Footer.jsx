const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
            <div className="row">
                <div className="column footlogo">
                    <img src="/assets/images/itgenius-logo.png" alt="logo"/>
                    <p>&copy;2021-2022 ITGenius Inc.</p>
                </div>
                <div className="column">
                    <h3>DOCS</h3>
                    <ul>
                        <li>Installation</li>
                        <li>Main Concepts</li>
                        <li>Advanced Guides</li>
                        <li>API Reference</li>
                        <li>Hooks</li>
                        <li>Testing</li>
                        <li>Contributing</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>CHANNELS</h3>
                    <ul>
                        <li>Github</li>
                        <li>Stack Overflow</li>
                        <li>Discussion Forums</li>
                        <li>Reactiflux Chat</li>
                        <li>DEV Community</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>COMMUNITY</h3>
                    <ul>
                        <li>Code of Conduct</li>
                        <li>Stack Overflow</li>
                        <li>Community Resources</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
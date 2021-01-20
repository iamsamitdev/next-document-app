import Head from 'next/head'
import DefaultLayout from '../components/layouts/DefaultLayout'

function Languages() {
    return (
    <DefaultLayout>
        <Head>
            <title>Languages - React</title>
        </Head>

        <h1 className="heading">Languages</h1>
        <p>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
    
        <h2>Try React</h2>
        <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started</p>

        <h3>Online Playgrounds</h3>
        <p>If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.</p>
        <p>If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.</p>

        <h3>Add React to a Website</h3>            
        <p>You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.</p>

        <h3>Create a New React App</h3>
        <p>When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!</p>
        <p>As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.</p>
    </DefaultLayout>
    )
}

export default Languages
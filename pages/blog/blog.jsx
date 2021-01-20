import Head from 'next/head'
import DefaultLayout from '../../components/layouts/DefaultLayout'

function blog() {
    return (
        <DefaultLayout>
        <Head>
            <title>Introducing Zero-Bundle-Size React Server Components - React</title>
        </Head>

        <h1 className="heading">Introducing Zero-Bundle-Size React Server Components</h1>
        <p>To introduce React Server Components, we have prepared a talk and a demo. If you want, you can check them out during the holidays, or later when work picks back up in the new year</p>
        
        <h2>Before We Start the Tutorial</h2>
        <p>We will build a small game during this tutorial. You might be tempted to skip it because you’re not building games — but give it a chance. The techniques you’ll learn in the tutorial are fundamental to building any React app, and mastering it will give you a deep understanding of React.</p>
        
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

export default blog

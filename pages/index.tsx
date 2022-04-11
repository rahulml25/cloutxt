import Head from 'next/head';
import {useState, useEffect} from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if (loading) {
  	  setText(localStorage.getItem('txt') || '');
  	  setLoading(false);
  	} else localStorage.setItem('txt', text);
  }, [text]);

  const onChange = (e) => {
  	setText(e.target.value);
  }

  const turnToUpperCase = (e) => {
  	setText(text.toUpperCase());
  }

  const turnToCapitalize = (e) => {
  	setText(
  	  text.charAt(0).toUpperCase()
      + text.slice(1).toLowerCase()
  	);
  }

  const turnToLowerCase = (e) => {
  	setText(text.toLowerCase());
  }

  const turnToClearSpace = (e) => {
  	setText(text.replace(/\s+/g, ' '))
  }

  return (
    <>
      <Head>
        <title>CloutTxt</title>
      </Head>

      <main className="container px-2 sm:px-4">
        <h1 className="my-2 text-2xl text-bold text-blue-500 text-center">
        CloutTxt</h1>

        <div className="mx-auto">
          <textarea placeholder="Enter the text..."
            className="py-3 px-4 w-full rounded-xl outline outline-blue-400"
            rows={8} value={text} onChange={onChange}
          />

          <div className="flex flex-wrap justify-center py-2 text-white space-x-2">
            <button
              onClick={turnToUpperCase}>Uppercase</button>
            <button
              onClick={turnToLowerCase}>Lowercase</button>
            <button
              onClick={turnToCapitalize}>Capitalize</button>
            <button
              onClick={turnToClearSpace}>Clear Space</button>
          </div>
        </div>

      </main>
    </>
  )
}

export default Home;

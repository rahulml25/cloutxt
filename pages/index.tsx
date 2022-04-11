import Head from 'next/head';
import {useState} from 'react';

const Home = () => {
  const [text, setText] = useState('');

  const onChange = (e) => {
  	setText(e.target.value);
  }

  const turnToUpperCase = (e) => {
  	setText(text.toUpperCase());
  }

  const turnToLowerCase = (e) => {
  	setText(text.toLowerCase());
  }

  return (
    <>
      <Head>
        <title>CloutTxt</title>
      </Head>

      <main className="container px-2">
        <h1 className="my-2 text-2xl text-bold text-blue-500 text-center">
        CloutTxt</h1>

        <div className="mx-auto">
          <textarea placeholder="Enter the text..."
            className="py-3 px-4 w-full rounded-xl outline outline-blue-400"
            rows={8} value={text} onChange={onChange}
          />

          <div className="py-2 text-white space-x-2">
            <button
              onClick={turnToUpperCase}
              className="p-2
              bg-blue-500 hover:bg-white
              border border-blue-500
              hover:text-blue-500
              active:scale-[.95] rounded-md
              transition">
              Uppercase</button>
            <button
              onClick={turnToLowerCase}
              className="p-2
              bg-blue-500 hover:bg-white
              border border-blue-500
              hover:text-blue-500
              active:scale-[.95] rounded-md
              transition">
              Lowercase</button>
          </div>
        </div>

      </main>
    </>
  )
}

export default Home;

import Link from 'next/link';

const Navbar = () => {
  return (
  	<nav className="flex p-2 items-center justify-between bg-white sticky top-0 shadow-md z-10">
  	  <div className="flex items-center">
  	    <img src="/favicon.ico"
  	      className="h-4 w-4"
  	    />
  	    <h2 className="ml-1">CloutTxt</h2>
  	  </div>

      <div className="flex items-center space-x-2">
        <Link href="/" scroll={false}>Home</Link>
        <Link href="/about" scroll={false}>About</Link>
      </div>
  	</nav>
  )
}

export default Navbar;

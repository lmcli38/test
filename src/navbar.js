import {Link, useMatch, useResolvedPath} from "react-router-dom"


export default function Navbar(){
   const path= window.location.pathname
   return <nav className="nav">
   <Link to="/" className="site-title">
   Equation Explorer
   </Link>
   <ul>
       <CustomLink to="/equations">Equations</CustomLink>
       <CustomLink to="/about">About</CustomLink>
       <CustomLink to="/contact">Contact</CustomLink>
       <CustomLink to="/gif">Gif</CustomLink>
   </ul>
   </nav>
}




function CustomLink({to,children,...props}){
   const resolvedPath= useResolvedPath(to)
   const isActive = useMatch({path: resolvedPath.pathname,end:true})
   return(
       <li className={isActive ? "active":""}>
           <Link to={to}{...props}>{children}>
                {children}
           </Link>
        </li>
   )
}
import { navItems } from "../data";

export default function Header(){
    return(
        <header>
            <a href="#home">sushashwat</a>
            <nav>
                <ul>
                    {navItems.map((item)=>(
                        <li key={item.id}>
                            <a href="{`#${item.id}`}>{item.label}"></a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
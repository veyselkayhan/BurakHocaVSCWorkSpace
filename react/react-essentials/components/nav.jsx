import { Link } from "./link";

export function Nav(){
    return(
        <nav>
        <ul>
            <li>
            <Link to = "/01" content="jsx ile işaretlem yapmak"/>
            </li>
            <li>
            <Link to = "/02" content="jsx ile işaretlem yapmak"/>
            </li>
            <li>
            <Link to = "/03" content="jsx ile işaretlem yapmak"/>
            </li>
        </ul>
        </nav>
    );
}

// nav komponentleri li elemanları içeriklerine link verilececek.Bu linkleri komponent olarak
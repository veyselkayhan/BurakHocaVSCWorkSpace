import { Link } from "./Link";

export function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/01">
                        jsx ile işaretleme yapmak
                    </Link>
                </li>
                <li>
                    <Link to="/02" >
                        jsx içerisinde js expressionları kullanmak"
                    </Link>
                </li>
                <li>
                    <Link to="/02">
                        bir komponente özellik - prop geçirmek
                    </Link>


                </li>
            </ul>

        </nav>
    );
}



// nav komponentinin li elemanları içeriklerine link verilecek. Bu linkleri komponent olarak yazınız
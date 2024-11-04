import Link from "next/link";
import Input from "../components/input";

function Home() {
    return (
      <>
        <div>
          Página atual: Inicial
        </div>
        <div>
          <Link href="/contact">
              Contato
          </Link>
        </div>
        <div>
          <Link href="/brigades">
              Brigadas
          </Link>
        </div>

        <div style={{margin: "1rem"}}>
          <text>Testes inputs</text>
          <br/>
          <Input placeholder="Placeholder" label="Label test"/>
          <br/>
          <Input placeholder="Desabilitado" disabled={true}/>
          <br/>
        </div>
      </>
    );
  }

  export default Home
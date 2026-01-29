
import FAQ from '../FAQPage/components/FAQ'
import styles from "./style.module.css";
import SearchBar from '../home/components/searchbar';
import Button from '../components/button';

function FrequentQuestionsPage() {
    return (
      <section className='section'>
        <div className='title'>
          Dúvidas Frequentes
        </div>
        <SearchBar placeholder="Pesquisar Dúvidas Frequentes" />
        <div className="mt-5">
          <FAQ />
        </div>
        <div className='flex flex-col align-center justify-center gap-2'>
          <p>Não encontrou o que precisava?</p>
          <Button
            style="standard"
            placeholder="Entre em Contato"
          >
          </Button>
        </div>
      </section>
    );
  }
  
  export default FrequentQuestionsPage
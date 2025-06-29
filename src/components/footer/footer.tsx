import Link from 'next/link';
import styles from './footer.module.scss';
import { ButtonTag } from '../button';
import { FiArrowUpRight } from 'react-icons/fi';

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.listLinkUtils}>
          <ul>
            <h3>Teltec Data</h3>

            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/">Quem somos</Link>
            </li>
            <li>
              <Link href="/">Fale conosco</Link>
            </li>
          </ul>
          <ul>
            <h3>Serviços</h3>

            <li>
              <Link href="/">IRV</Link>
            </li>
            <li>
              <Link href="/">CMS</Link>
            </li>
            <li>
              <Link href="/">PMS</Link>
            </li>
          </ul>
          <ul>
            <h3>Mundo Teltec</h3>

            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Cases</Link>
            </li>
            <li>
              <Link href="/">Fale conosco</Link>
            </li>
          </ul>
          <ul>
            <h3>Parceiros</h3>

            <li>
              <Link href="/">Microsoft</Link>
            </li>
            <li>
              <Link href="/">Fortinet</Link>
            </li>
            <li>
              <Link href="/">Paloalto</Link>
            </li>
          </ul>
        </div>

        <div className={styles.listContacts}>
          <div className={styles.itemContact}>
            <p>Endereço</p>

            <Link href="">
              R. Henri Dunant, 873 - Chácara Santo Antônio, São Paulo
              <FiArrowUpRight size={20} color="#fafafa" />
            </Link>
          </div>
          <div className={styles.itemContact}>
            <p>Contato</p>

            <Link href="">
              contato@teltecsolutions.com.br{' '}
              <FiArrowUpRight size={20} color="#fafafa" />
            </Link>
          </div>
          <div className={styles.itemContact}>
            <p>Telefone</p>

            <Link href="">
              (11) 3508-6180 <FiArrowUpRight size={20} color="#fafafa" />
            </Link>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© 2025 Teltec Data 2025. Todos os direitos reservados.</p>

          <p>Política de Privacidade Política de Segurança da Informação</p>
        </div>

        <div className={styles.listButtons}>
          <ul>
            <li>
              <ButtonTag
                label="Whatsapp"
                size="lg"
                variant="tertiary"
                hoverColor="#1A9949"
              />
            </li>
            <li>
              <ButtonTag label="Instagram" size="lg" variant="tertiary" />
            </li>
            <li>
              <ButtonTag label="Linkedin" size="lg" variant="tertiary" />
            </li>
            <li>
              <ButtonTag label="Youtube" size="lg" variant="tertiary" />
            </li>
          </ul>

          <div>
            <span>Voltar ao topo</span>
            <button></button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;

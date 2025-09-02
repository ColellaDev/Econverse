import styles from './styles.module.scss';

import { HeaderTop } from './HeaderTop';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderBottom } from './HeaderBottom';

type SearchProps ={
  searchTerms: string;
  setSearchTerms: React.Dispatch<React.SetStateAction<string>>;
}

export function Header({searchTerms, setSearchTerms}:SearchProps) {
  return (
    <header className={styles.headerContainer}>
      <HeaderTop />
      <HeaderMiddle searchTerms={searchTerms} setSearchTerms={setSearchTerms}/>
      <HeaderBottom />
    </header>
  );
}

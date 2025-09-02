import styles from './styles.module.scss'
import { TitleRelatedProduct } from './TitleRelatedProducts'
import { Slider } from '../Slider'

type Props = {
    searchTerms: string
}


export function RelatedProducts({searchTerms}:Props) {
    return (
        <section className={styles.relatedProductsContainer}>
            <TitleRelatedProduct/>
            <p className={styles.pProducts}>Ver todos</p>
            <Slider searchTerms={searchTerms}/>
        </section>
    )
}
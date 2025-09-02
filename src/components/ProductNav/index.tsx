import { TitleRelatedProduct } from '../RelatedProducts/TitleRelatedProducts'
import { Slider } from '../Slider'
import { NavCategories } from './NavCategories'
import styles from './styles.module.scss'

type ProductNavProps = {
    searchTerms: string
}


export function ProductNav({searchTerms}:ProductNavProps) {
    return (
        <section className={styles.productNavContainer}>
            <TitleRelatedProduct/>
            <NavCategories/>
            <Slider searchTerms={searchTerms}/>
        </section>
    )
}
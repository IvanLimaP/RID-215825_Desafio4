import { useEffect } from 'react'


// Hook responsável por alterar dinamicamente o título da página
// Utilizado para melhorar SEO e experiência do usuário
export default function usePageTitle(title) {
    useEffect(() => {
        document.title = title
    }, [title])
}
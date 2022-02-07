import { useRouter, NextRouter } from 'next/router'
import { useRef, useState } from 'react'

const useRouterReplace = (): NextRouter['replace'] => {
    const router = useRouter()
    const routerReference = useRef(router)

    routerReference.current = router

    const [{ replace }] = useState<Pick<NextRouter, 'replace'>>({
        replace: path => routerReference.current.replace(path)
    })

    return replace
}

export default useRouterReplace

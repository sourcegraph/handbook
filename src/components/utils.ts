import * as React from 'react'

export function swallowEvent(event: any) {
    event.stopPropagation()
    event.preventDefault()
}

export function useOuterClick(dom: React.RefObject<HTMLElement>, cb: () => void) {
    const cbRef = React.useRef(cb)
    cbRef.current = cb

    React.useEffect(() => {
        function handler(event: any) {
            if (
                dom.current?.contains(event.target) ||
                // Add support for ReactShadowRoot
                // @ts-expect-error wrong types, the `host` property exists https://stackoverflow.com/a/25340456
                event.target === dom.current?.getRootNode().host
            ) {
                return
            }
            event.preventDefault()
            event.stopPropagation()
            cbRef.current()
        }
        window.addEventListener('pointerdown', handler, true)
        return () => window.removeEventListener('pointerdown', handler, true)
    }, [dom])
}

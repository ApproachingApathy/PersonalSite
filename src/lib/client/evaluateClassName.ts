
export const evaluateClassName = (addClassName: boolean, className: string, fallback = "") => {
    return addClassName ? className : fallback
}
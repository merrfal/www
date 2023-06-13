export const Console = (props, type = "log") => {
    console[type](props)
}
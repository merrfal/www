const AddLink = (links, newLink, setMethod) => {
    if(links.includes(newLink)) {
        return {
            "error": "or something"
        }
    }

    else setMethod({...PromiseProvider, links: [...links, newLink]})
}

const DeleteLink = (links, newLink, setMethod) => {
    if(!links.includes(newLink)) {
        return {
            "error": "or something"
        }
    }

    else setMethod({...PromiseProvider, links: [...links, newLink]})
}

const EditLink = (links, newLink, setMethod) => {
    if(!links.includes(newLink)) {
        return {
            "error": "or something"
        }
    }

    else setMethod({...PromiseProvider, links: [...links, newLink]})
}
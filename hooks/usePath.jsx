export const usePath = (router, compare, index = 2) => {
    if(router === undefined || compare === undefined) throw new Error("usePath: router or compare is undefined");
    
    const afterhostpath = router.asPath.split("/")
    if(!Array.isArray(afterhostpath)) return false;

    return afterhostpath[index] === compare;
}
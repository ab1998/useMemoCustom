import React, { useEffect } from "react"

export const useCustomMemo = (cb, dev) => {
    //variable/state - where cached value is saved
    // comapre changes in dev
    //cleanup logic
    //return value
    const areEqual = (prevdeps, nextdeps) => {
        if (prevdeps === null) {
            return false
        }
        if (prevdeps.length !== nextdeps.length) {
            return false
        }
        for (let i = 0; i < prevdeps.length; i++) {
            if (prevdeps[i] !== nextdeps[i]) {
                return false
            }
        }
        return true
    }
    const memoizedRef = React.useRef() // used to restore value between rerender

    if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
        memoizedRef.current = {
            value: cb(),
            dev // storing previous dependency to compare during next iteration
        }
    }
    useEffect(()=>{
        return()=>{
            memoizedRef.current = null 
        }
    },[])

    return memoizedRef.current.value

}
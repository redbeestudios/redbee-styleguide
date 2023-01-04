import React, { useRef, useEffect } from 'react';

 type OutsideAlerterProps = {
     handleOutSideClick:()=>void,
     active?:boolean
     exclude?:any
     children?:any
}

const hasParentBySelector = (el) => (selector) => {
    let isIDSelector = selector.indexOf('#') === 0;
    if (selector.indexOf('.') === 0 || selector.indexOf('#') === 0) {
        selector = selector.slice(1);
    }
    while (el && el.tagName !== 'BODY') {
        if (isIDSelector) {
            if (el.id === selector) {
                return true;
            }
        } else if (el.classList.contains(selector)) {
            return true;
        }
        el = el.parentElement;
    }
    return false;
};

const useOutsideAlerter = (ref, outSideClickAction, excludeList) => {
    useEffect(() => {
        if (ref) {
            const handleClickOutside = (event) => {
                let isInExcludeList = false;
                if (excludeList) {
                    isInExcludeList = excludeList.some(hasParentBySelector(event.target));
                }
                if (
                    ref.current &&
                    !ref.current.contains(event.target) &&
                    !isInExcludeList
                ) {
                    outSideClickAction && outSideClickAction();
                }
            };

            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [ref]);
};

const OutsideAlerter = (props:OutsideAlerterProps) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.handleOutSideClick, props.exclude);

    if (props.active === false) return props.children;
    return <div ref={wrapperRef}>{props.children}</div>;
};


export default OutsideAlerter;

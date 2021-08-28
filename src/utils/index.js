import { getProduct } from "../api";
import { useEffect, useRef } from "react";

/**
 *  Helper that checks if product exists by product ID
 *  Returns true if exists or false
 */

export const checkUrlProductExists = async (params) => {
  const productId = params.productId;
  const result = await getProducts(productId);

  let isValid = false;

  for (let val of result) {
    if (val.id == productId) {
      isValid = true;

      break;
    } else {
      continue;
    }
  }

  return isValid;
};

/**
 *  Helper that closes dropdown if user clicks outside dropdown field
 */

export const useOuterClick = (e) => {
  const innerRef = useRef();
  const callbackRef = useRef();

  // set current callback in ref, before second useEffect uses it
  useEffect(() => {
    // useEffect wrapper to be safe for concurrent mode
    callbackRef.current = e;
  });

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    // read most recent callback and innerRef dom node from refs
    function handleClick(e) {
      if (innerRef.current && callbackRef.current && !innerRef.current.contains(e.target)) {
        callbackRef.current(e);
      }
    }
  }, []); // no need for callback + innerRef dep

  return innerRef; // return ref; client can omit `useRef`
};

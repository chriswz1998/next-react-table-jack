import * as math from 'mathjs'
import { useCallback, useEffect, useRef, useState } from 'react'

export const filterData = (res: any[]) => {
  if (!res) return []
  let List = []
  for (const ket in res) {
    // @ts-ignore
    List.push(res[ket])
  }
  return List.map(({ project }) => {
    return [...(project)]
  }).flat()
}

export const multiply_math = (num1: string | number, num2: string | number) => {
  return math.multiply(math.bignumber(num1), math.bignumber(num2)) as number
}

interface ICurrent {
  fun: Function,
  timer: null | NodeJS.Timeout
}

function useDebounce(fn: (args: any) => void, delay: number, dep: any = []) {
  const { current } = useRef<ICurrent>({ fun: fn, timer: null })
  useEffect(function() {
    current.fun = fn
  }, [fn])

  return useCallback((args: any) => {
    if (current.timer) {
      clearTimeout(current.timer)
    }
    current.timer = setTimeout(() => {
      current.fun(args)
    }, delay)
  }, dep)
}

export default useDebounce

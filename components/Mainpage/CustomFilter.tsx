import { CustomFilterProps } from '@/types'
import React from 'react'

export default function CustomFilter(props:CustomFilterProps) {
  return (
    <div>{props.title}</div>
  )
}

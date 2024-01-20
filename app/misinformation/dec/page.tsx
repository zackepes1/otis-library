import React from 'react'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, } from '@/components/ui/pagination';

const December = () => {
  return (
    <div>December
         <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationLink href="/misinformation/jan">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/misinformation/feb">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/misinformation/march">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/misinformation/april">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/misinformation/may">5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/misinformation/june">6</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/misinformation/july">7</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/misinformation/aug">8</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/misinformation/sept">9</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/misinformation/oct">10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/misinformation/nov">11</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/misinformation/dec">12</PaginationLink>
    </PaginationItem>

  </PaginationContent>
</Pagination>
    </div>
  )
}

export default December
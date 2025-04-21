import { ReactNode } from 'react'
import { DndContext } from '@dnd-kit/core';

interface ProvidersProps {
    children: ReactNode;
}

export const Providers = ({children}: ProvidersProps) => {
  return (
    <>
        <DndContext>
            {children}
        </DndContext>
    </>
  )
}

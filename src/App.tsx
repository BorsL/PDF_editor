import { useState } from 'react';
import type { Task, Column as ColumnType } from '@/components/types';
import { Column } from '@/components/Column';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

const COLUMNS: ColumnType[] = [
  { id: 'NOT_USED', title: 'list of items available' },
  { id: 'USED', title: 'used' },
];

const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Feature 1',
    description: '',
    status: 'USED',
  },
  {
    id: '2',
    title: 'Feature 2',
    description: '',
    status: 'NOT_USED',
  },
  {
    id: '3',
    title: 'Feature 3',
    description: '',
    status: 'USED',
  },
  {
    id: '4',
    title: 'Feature 4',
    description: '',
    status: 'NOT_USED',
  },
  {
    id: '5',
    title: 'Feature 5',
    description: '',
    status: 'USED',
  },
  {
    id: '6',
    title: 'Feature 6',
    description: '',
    status: 'NOT_USED',
  },
  {
    id: '7',
    title: 'Feature 7',
    description: '',
    status: 'USED',
  },
  {
    id: '8',
    title: 'Feature 8',
    description: '',
    status: 'NOT_USED',
  },
  {
    id: '9',
    title: 'Feature 9',
    description: '',
    status: 'USED',
  },
  {
    id: '10',
    title: 'Feature 10',
    description: '',
    status: 'NOT_USED',
  },
];

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task['status'];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task,
      ),
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-start justify-center">
      <div className="flex gap-6 overflow-x-auto w-full max-w-6xl">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
            />
          ))}
        </DndContext>
      </div>
    </div>
  );
}
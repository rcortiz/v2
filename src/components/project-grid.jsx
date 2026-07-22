"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ProjectCard from "@/components/sections/projects";

const MAX_PROJECTS = 6;
const STORAGE_KEY = "portfolio-project-order-v2";

const SortableProject = ({ project }) => {
  const {
    attributes,
    listeners,
    setActivatorNodeRef,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: project.id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: isDragging ? undefined : transition,
        zIndex: isDragging ? 20 : undefined,
      }}
      onPointerDown={listeners?.onPointerDown}
      className={`relative h-full select-none ${
        isDragging
          ? "cursor-grabbing opacity-90"
          : "cursor-grab opacity-100"
      }`}
    >
      <ProjectCard
        {...project}
        isDragging={isDragging}
        dragHandleProps={{
          ...attributes,
          ref: setActivatorNodeRef,
          onKeyDown: listeners?.onKeyDown,
        }}
      />
    </div>
  );
};

const ProjectGrid = ({ projects }) => {
  const availableProjects = useMemo(
    () => projects.slice(0, MAX_PROJECTS),
    [projects],
  );
  const [orderedProjects, setOrderedProjects] = useState(availableProjects);
  const orderLoaded = useRef(false);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  useEffect(() => {
    try {
      const savedOrder = JSON.parse(localStorage.getItem(STORAGE_KEY));

      if (Array.isArray(savedOrder)) {
        const projectById = new Map(
          availableProjects.map((project) => [project.id, project]),
        );
        const savedProjects = savedOrder
          .map((id) => projectById.get(id))
          .filter(Boolean);
        const savedIds = new Set(savedProjects.map(({ id }) => id));
        const newProjects = availableProjects.filter(
          ({ id }) => !savedIds.has(id),
        );

        setOrderedProjects([...savedProjects, ...newProjects]);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      orderLoaded.current = true;
    }
  }, [availableProjects]);

  useEffect(() => {
    if (!orderLoaded.current) return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(orderedProjects.map(({ id }) => id)),
    );
  }, [orderedProjects]);

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    setOrderedProjects((items) => {
      const oldIndex = items.findIndex(({ id }) => id === active.id);
      const newIndex = items.findIndex(({ id }) => id === over.id);

      return arrayMove(items, oldIndex, newIndex);
    });
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={orderedProjects.map(({ id }) => id)}
        strategy={rectSortingStrategy}
      >
        <div className="grid gap-5 md:grid-cols-[repeat(2,minmax(0,340px))] xl:grid-cols-[repeat(3,minmax(0,340px))]">
          {orderedProjects.map((project) => (
            <SortableProject key={project.id} project={project} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default ProjectGrid;

import { z } from "zod";

const nonEmptyString = z.string().min(1);

export const ActorSchema = z.object({
  id: nonEmptyString,
  name: nonEmptyString,
  description: nonEmptyString,
});

export const RequirementPrioritySchema = z.enum(["low", "medium", "high"]);

export const FunctionalRequirementSchema = z.object({
  id: nonEmptyString,
  title: nonEmptyString,
  description: nonEmptyString,
  priority: RequirementPrioritySchema,
  actorIds: z.array(z.string()),
});

export const NonFunctionalRequirementCategorySchema = z.enum([
  "performance",
  "security",
  "availability",
  "scalability",
  "usability",
  "other",
]);

export const NonFunctionalRequirementSchema = z.object({
  id: nonEmptyString,
  title: nonEmptyString,
  description: nonEmptyString,
  category: NonFunctionalRequirementCategorySchema,
});

export const EntitySchema = z.object({
  id: nonEmptyString,
  name: nonEmptyString,
  description: nonEmptyString,
});

export const ExternalSystemSchema = z.object({
  id: nonEmptyString,
  name: nonEmptyString,
  description: nonEmptyString,
});

export const RequirementModelSchema = z.object({
  actors: z.array(ActorSchema),
  functionalRequirements: z.array(FunctionalRequirementSchema),
  nonFunctionalRequirements: z.array(NonFunctionalRequirementSchema),
  entities: z.array(EntitySchema),
  externalSystems: z.array(ExternalSystemSchema),
  constraints: z.array(z.string()),
});

export const ArchitectureComponentTypeSchema = z.enum([
  "client",
  "service",
  "database",
  "external",
]);

export const ArchitectureComponentSchema = z.object({
  id: nonEmptyString,
  name: nonEmptyString,
  type: ArchitectureComponentTypeSchema,
  description: nonEmptyString,
});

export const ArchitectureConnectionSchema = z.object({
  id: nonEmptyString,
  sourceId: nonEmptyString,
  targetId: nonEmptyString,
  label: nonEmptyString,
});

export const ArchitectureModelSchema = z.object({
  components: z.array(ArchitectureComponentSchema),
  connections: z.array(ArchitectureConnectionSchema),
});

export const RequirementTraceSchema = z.object({
  requirementId: nonEmptyString,
  componentIds: z.array(nonEmptyString),
});

export const TraceabilityModelSchema = z.object({
  mappings: z.array(RequirementTraceSchema),
});

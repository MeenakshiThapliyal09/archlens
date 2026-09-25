import type { z } from "zod";
import type {
  ActorSchema,
  ArchitectureComponentSchema,
  ArchitectureComponentTypeSchema,
  ArchitectureConnectionSchema,
  ArchitectureModelSchema,
  EntitySchema,
  ExternalSystemSchema,
  FunctionalRequirementSchema,
  NonFunctionalRequirementCategorySchema,
  NonFunctionalRequirementSchema,
  RequirementModelSchema,
  RequirementPrioritySchema,
  RequirementTraceSchema,
  TraceabilityModelSchema,
} from "../lib/validation/schemas";

export type Actor = z.infer<typeof ActorSchema>;
export type RequirementPriority = z.infer<typeof RequirementPrioritySchema>;
export type FunctionalRequirement = z.infer<typeof FunctionalRequirementSchema>;
export type NonFunctionalRequirementCategory = z.infer<
  typeof NonFunctionalRequirementCategorySchema
>;
export type NonFunctionalRequirement = z.infer<
  typeof NonFunctionalRequirementSchema
>;
export type Entity = z.infer<typeof EntitySchema>;
export type ExternalSystem = z.infer<typeof ExternalSystemSchema>;
export type RequirementModel = z.infer<typeof RequirementModelSchema>;
export type ArchitectureComponentType = z.infer<
  typeof ArchitectureComponentTypeSchema
>;
export type ArchitectureComponent = z.infer<typeof ArchitectureComponentSchema>;
export type ArchitectureConnection = z.infer<
  typeof ArchitectureConnectionSchema
>;
export type ArchitectureModel = z.infer<typeof ArchitectureModelSchema>;
export type RequirementTrace = z.infer<typeof RequirementTraceSchema>;
export type TraceabilityModel = z.infer<typeof TraceabilityModelSchema>;

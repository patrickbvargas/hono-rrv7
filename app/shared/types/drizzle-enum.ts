import type {
  clientTypeEnum,
  contractLegalAreaEnum,
  employeeAssignmentEnum,
  employeeRoleEnum,
  employeeTypeEnum,
  entityStatusEnum,
  revenueTypeEnum,
} from "~/db";

export type ClientType = (typeof clientTypeEnum.enumValues)[number];

export type ContractLegalArea =
  (typeof contractLegalAreaEnum.enumValues)[number];

export type EmployeeType = (typeof employeeTypeEnum.enumValues)[number];

export type EmployeeRole = (typeof employeeRoleEnum.enumValues)[number];

export type EmployeeAssignment =
  (typeof employeeAssignmentEnum.enumValues)[number];

export type RevenueType = (typeof revenueTypeEnum.enumValues)[number];

export type EntityStatus = (typeof entityStatusEnum.enumValues)[number];

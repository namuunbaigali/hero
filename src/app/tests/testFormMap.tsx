"use client";

import * as React from "react";
import type { TestItem } from "./TestGrid";

import EQForm from "./forms/EQForm";
import DepressionForm from "./forms/DepressionForm";
import GroupRoleForm from "./forms/GroupRoleForm";
import FamilyForm from "./forms/FamilyForm";

export type FormPayload = Record<string, any>;

export type TestFormProps = {
  test: TestItem;
  onClose: () => void;
  onSubmit: (payload: FormPayload) => void;

  // нэмэлт мэдээлэл:
  userId?: string;
  lang?: "mn" | "en";
};

export type TestFormComponent = React.ComponentType<TestFormProps>;

export const TEST_FORM_REGISTRY: Record<string, TestFormComponent> = {
  eq: EQForm,
  depression: DepressionForm,
  "group-role": GroupRoleForm,
  family: FamilyForm,
};

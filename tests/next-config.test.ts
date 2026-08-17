import { describe, expect, it } from "vitest";

import * as nextConfigModule from "../next.config";

type BasePathResolver = (environment: NodeJS.ProcessEnv) => string;

const resolveDeploymentBasePath = (
  nextConfigModule as typeof nextConfigModule & {
    resolveDeploymentBasePath?: BasePathResolver;
  }
).resolveDeploymentBasePath;

describe("deployment base path", () => {
  it("uses the domain root on Vercel", () => {
    expect(resolveDeploymentBasePath?.({ VERCEL: "1" })).toBe("");
  });

  it("keeps the repository path for GitHub Pages", () => {
    expect(resolveDeploymentBasePath?.({ GITHUB_ACTIONS: "true" })).toBe(
      "/ssh-eat",
    );
  });
});

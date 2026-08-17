export function resolveDeploymentBasePath(
  environment: NodeJS.ProcessEnv,
): string {
  return environment.GITHUB_ACTIONS === "true" ? "/ssh-eat" : "";
}

const deploymentBasePath = resolveDeploymentBasePath(process.env);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves this repository below /ssh-eat. Other hosts, including
  // Vercel, serve it from the domain root.
  basePath: deploymentBasePath,
  assetPrefix: deploymentBasePath,
};

export default nextConfig;

export { default, alt, size, contentType } from "./opengraph-image";

// Must be declared here (not re-exported) so Next can statically parse it.
// The shared image reads the logo off the filesystem → Node runtime.
export const runtime = "nodejs";

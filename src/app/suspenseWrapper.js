import { Suspense } from "react";

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
);

export default SuspenseWrapper;

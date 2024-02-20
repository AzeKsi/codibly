import Spinner from "../../assets/images/spinner.svg?react";

export const Loader = () => (
  <div className="absolute left-1/2 top-1/2 -translate-y-1/2">
    <Spinner className="animate-spin" />
  </div>
);

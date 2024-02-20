import * as React from "react";

export interface ModalProps {
  onClose: () => void;
  opened: boolean;
  children?: React.ReactNode;
  preventScroll?: boolean;
}

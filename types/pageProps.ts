import { ComponentType } from "~~/components/components";

export interface PageProps {
  blocks: Array<{ CONTENT_TYPE: ComponentType }>;
  name: any;
  slug: string;
}

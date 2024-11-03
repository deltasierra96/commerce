import { ListItemBuilder } from "sanity/structure";
import defineStructure from "../../utils/defineStructure";

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("Startup")
    .schemaType("startup")
    .child(S.documentTypeList("startup"))
);

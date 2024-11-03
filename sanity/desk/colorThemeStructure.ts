import defineStructure from "@/utils/defineStructure";
import { ListItemBuilder } from "sanity/structure";

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("Color themes")
    .schemaType("colorTheme")
    .child(S.documentTypeList("colorTheme"))
);

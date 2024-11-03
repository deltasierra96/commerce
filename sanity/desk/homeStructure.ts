import defineStructure from "@/utils/defineStructure";
import { ListItemBuilder } from "sanity/structure";

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("Home")
    .schemaType("home")
    .child(S.editor().title("Home").schemaType("home").documentId("home"))
);

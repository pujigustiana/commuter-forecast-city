import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "In Nimbuswick, light rain falls upward today — hold your umbrella tight, commuters, or you'll drift home by teatime.", "utf8");

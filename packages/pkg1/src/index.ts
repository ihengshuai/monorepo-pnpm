import { logger } from "./utils";
// 导入monorepo中其他模块包
import { main } from "@mono/pkg2";

logger("test");
main();

export * from "./utils";
export * from "@mono/pkg2";

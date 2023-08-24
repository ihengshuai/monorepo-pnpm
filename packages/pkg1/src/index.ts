import { logger, transform } from "@/utils";
// 导入monorepo中其他模块包
import { main } from "pkg2";

logger("test");
main();

export { transform };

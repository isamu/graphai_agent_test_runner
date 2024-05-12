import samplePlugin from "./sample_plugin";

import { agentTestRunner } from "graphai/lib/utils/test_utils";

const main = async () => {
  await agentTestRunner(samplePlugin);
};

main();

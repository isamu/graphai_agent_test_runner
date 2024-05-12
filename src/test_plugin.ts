import * as packages from "graphai/lib/experimental_agents/string_agents/packages";

import { agentTestRunner } from "graphai/lib/utils/test_utils";

const main = async () => {
  for (const agentInfo of Object.values(packages)) {
    await agentTestRunner(agentInfo);
  }
};

main();

import { AgentFunction } from "graphai";

export const sampleAgent: AgentFunction<number[], number[], number[]> = async ({ params, inputs }) => {
  return Array.from(inputs[0].keys()).map((k: number) => {
    return inputs[0][k] * params[k];
  });
};

const sampleInput = [[1, 2]];
const sampleParams = [5, 15];
const sampleResult = [5, 30];

// for test and document
const sampleAgentInfo = {
  name: "sampleAgent",
  agent: sampleAgent,
  mock: sampleAgent,
  samples: [
    {
      inputs: sampleInput,
      params: sampleParams,
      result: sampleResult,
    },
  ],
  description: "Sample agent",
  category: [],
  author: "isamu arimoto",
  repository: "https://github.com/isamu/graphai_agent_test_runner",
  license: "MIT",
};
export default sampleAgentInfo;

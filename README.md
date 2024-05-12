
install packages.
```
yarn install
```

copy sample agent.

```
cp src/sample_agent.ts src/your_agent.ts
```

add your agent to test runner. open src/test_agent.ts

```
import yourAgent from "./your_agent";
```

```
  await agentTestRunner(sampleAgent);
```

edit your agent (src/your_agent.ts).

run test

```
yarn run test
```




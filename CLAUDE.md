# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Test runner for GraphAI agents. Provides a framework for testing agents with YAML-based test definitions.

## Commands

```bash
yarn build      # Compile TypeScript (tsc && tsc-alias)
yarn lint       # Run ESLint
yarn format     # Format with Prettier
yarn test       # Run tests (node:test with ts-node)
```

## Architecture

- `src/` - Agent implementations and test runners
- `test_yaml/` - YAML-based test definitions
- `samples/` - Sample configurations
- Uses TypeScript with tsc-alias for path resolution

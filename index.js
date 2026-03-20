#!/usr/bin/env node
console.log(`
Naia MCP Server
===============

This is a remote MCP server. No local installation needed.

Server URL: https://naia.today/api/v1/mcp
Auth: Bearer token (API key from https://naia.today/dashboard/settings/api)

Quick setup for Claude Code:
  claude mcp add naia-api --transport http --url https://naia.today/api/v1/mcp --header "Authorization: Bearer YOUR_KEY"

Full docs: https://naia.today/developers
`);

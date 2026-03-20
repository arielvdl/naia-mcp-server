# Naia MCP Server

> Generative Engine Optimization (GEO) platform — analyze and optimize brand visibility across AI engines.

Naia provides an MCP server that lets AI assistants interact with the full GEO platform: run analyses across ChatGPT, Gemini, Claude and Perplexity, generate optimized content, and manage execution plans.

## Quick Install

### Claude Code

```bash
claude mcp add naia-api --transport http --url https://naia.today/api/v1/mcp --header "Authorization: Bearer YOUR_API_KEY"
```

### Cursor

Create `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "naia": {
      "url": "https://naia.today/api/v1/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}
```

### VS Code

Add to `settings.json`:

```json
{
  "mcp": {
    "servers": {
      "naia": {
        "type": "http",
        "url": "https://naia.today/api/v1/mcp",
        "headers": {
          "Authorization": "Bearer YOUR_API_KEY"
        }
      }
    }
  }
}
```

### Windsurf

Create `.windsurf/mcp.json`:

```json
{
  "mcpServers": {
    "naia": {
      "url": "https://naia.today/api/v1/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}
```

### Replit / Lovable

Configure as MCP HTTP server:
- URL: `https://naia.today/api/v1/mcp`
- Header: `Authorization: Bearer YOUR_API_KEY`

## Get Your API Key

1. Create an account at [naia.today](https://naia.today)
2. Go to [Dashboard > Settings > API](https://naia.today/dashboard/settings/api)
3. Create a new API key with the scopes you need

## Available Tools

| Tool | Description | Credits |
|------|-------------|---------|
| `list_businesses` | List your businesses/brands | Free |
| `get_business` | Get business details | Free |
| `create_business` | Create a new business | Free |
| `trigger_analysis` | Run GEO analysis | Variable |
| `get_analysis` | Get analysis results (poll until completed) | Free |
| `get_recommendations` | Get optimization recommendations | Free |
| `list_content` | List generated content | Free |
| `get_content` | Get content with full draft | Free |
| `create_content` | Generate AI-optimized content | 5 credits |
| `approve_content` | Toggle content approval | Free |
| `get_credits` | Check credit balance | Free |
| `list_execution_plans` | List execution plans | Free |
| `get_execution_plan` | Get plan with phases and tasks | Free |
| `create_execution_plan` | Generate strategic plan | 5 credits |
| `generate_task_content` | Generate content for a task | 5 credits |
| `update_task_status` | Update task status | Free |
| `get_queries` | Get search queries | Free |
| `update_queries` | Update search queries | Free |

## Example Usage

After configuring the MCP server, you can ask your AI assistant:

- "List my businesses on Naia"
- "Run a GEO analysis for my business across ChatGPT and Gemini"
- "Check the results of my latest analysis"
- "Generate a blog post about AI visibility optimization"
- "Create an execution plan based on the analysis recommendations"
- "What is my current credit balance?"

## REST API

The same functionality is available via REST API at `https://naia.today/api/v1/`.

Full documentation: [naia.today/developers](https://naia.today/developers)

## Authentication

All requests require an API key in the `Authorization` header:

```
Authorization: Bearer naia_YOUR_API_KEY
```

### Scopes

- `read` — GET requests (list, get, search)
- `write` — POST, PUT, PATCH (create, update, generate)
- `admin` — DELETE + key/webhook management

### Rate Limits

200 requests per minute per API key (configurable).

## Links

- [Documentation](https://naia.today/developers)
- [Get API Key](https://naia.today/dashboard/settings/api)
- [OpenAPI Spec](https://naia.today/api/v1/openapi.json)
- [llms.txt](https://naia.today/api/v1/llms.txt)
- [MCP Server Card](https://naia.today/.well-known/mcp/server-card.json)

## License

Proprietary. Usage subject to [Terms of Service](https://naia.today/terms).

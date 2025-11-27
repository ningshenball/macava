# Maca Chatbot - AI Provider Configuration 🤖

Macava.io's Maca chatbot supports three AI providers:
- **OpenAI** (gpt-4o-mini) - ✅ Default, pre-configured with bundled Convex keys
- **Google Gemini** (gemini-pro) - Requires API key from ai.google.dev
- **xAI Grok** (grok-beta) - Requires API key from console.x.ai

## Quick Start

The chatbot works out of the box with OpenAI using Convex's bundled API keys. To use Gemini or Grok, follow the setup below.

## Configuration

### 1. Choose Your AI Provider

Set the `AI_PROVIDER` environment variable in your Convex deployment:

```bash
# Options: "openai" (default), "gemini", or "grok"
AI_PROVIDER=gemini
```

### 2. Get API Keys

#### Google Gemini
1. Visit [ai.google.dev](https://ai.google.dev)
2. Sign in with your Google account
3. Click "Get API Key" → "Create API Key"
4. Copy your API key

#### xAI Grok
1. Visit [console.x.ai](https://console.x.ai)
2. Sign in or create an account
3. Navigate to API Keys section
4. Generate a new API key
5. Copy your API key

### 3. Add Environment Variables

In your Convex dashboard:

1. Open the **Database** tab
2. Click **Settings** (gear icon)
3. Click **Environment Variables**
4. Add the following variables:

**For Gemini:**
```
AI_PROVIDER=gemini
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

**For Grok:**
```
AI_PROVIDER=grok
GROK_API_KEY=your_actual_grok_api_key_here
```

**For OpenAI (custom key):**
```
AI_PROVIDER=openai
# The bundled keys are already configured, but you can override:
# CONVEX_OPENAI_API_KEY=your_openai_key
# CONVEX_OPENAI_BASE_URL=https://api.openai.com/v1
```

## API Details

### Google Gemini API
- **Endpoint:** `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent`
- **Model:** `gemini-pro`
- **Max Tokens:** 200 (for cost optimization)
- **Temperature:** 0.7

### xAI Grok API
- **Endpoint:** `https://api.x.ai/v1/chat/completions`
- **Model:** `grok-beta`
- **Max Tokens:** 200 (for cost optimization)
- **Temperature:** 0.7

### OpenAI API (Bundled)
- **Model:** `gpt-4o-mini` (or `gpt-4.1-nano`)
- **Max Tokens:** 200
- **Pre-configured:** Works immediately without setup

## Cost Optimization

All providers are configured with:
- **Max 200 tokens per response** - Keeps responses fast and affordable
- **System prompt optimization** - Instructs Maca to be concise
- **Error handling** - Graceful fallbacks if API calls fail

## Testing Your Configuration

After configuration, test Maca by asking coding questions! Here are some examples:

### Example 1: Python Variables
**You ask:** "Explain Python variables? ^_^"

**Maca responds:**
```
Variables store data! Think of them as labeled boxes 📦

x = 5  # Integer
name = "Coder"  # String

Try this: Create a variable for your age! What would you name it? (•_•)
```

### Example 2: JavaScript Basics
**You ask:** "What's the difference between let and const?"

**Maca responds:**
```
Great question! :D

let age = 20;      // Can change
age = 21;          // ✅ Works!

const name = "Jo"; // Cannot change
name = "Sam";      // ❌ Error!

Try it: Which would you use for your birthday? (•_•)
```

### Example 3: HTML Tags
**You ask:** "How do I create a link in HTML?"

**Maca responds:**
```
Links are easy! Use the <a> tag ^_^

<a href="https://macava.io">Click me!</a>

The href tells where to go! Try making a link to your favorite site! 🎯
```

## Troubleshooting

### "I'm having trouble thinking right now"
- Check that your API key is correct
- Verify the `AI_PROVIDER` matches your configured key
- Check API quota/billing on the provider's dashboard

### Slow responses
- Normal for first request (cold start)
- Subsequent requests should be fast (<2 seconds)

### Wrong provider being used
- Ensure `AI_PROVIDER` environment variable is set correctly
- Redeploy after changing environment variables

## Security Notes

- ✅ API keys are stored securely as environment variables
- ✅ All API calls are server-side (Convex actions)
- ✅ Keys are never exposed to the client
- ✅ Rate limiting via Convex's built-in protections

## Switching Providers

To switch providers:
1. Update `AI_PROVIDER` environment variable
2. Add the new provider's API key
3. Save changes in Convex dashboard
4. No code changes needed - it's automatic!

## Example Maca Responses

**Python Question:**
```
User: "What are Python lists?"
Maca: "Lists are like shopping carts for data! 🛒

my_list = [1, 2, 3, "apple"]
print(my_list[0])  # Gets first item

Mad libs challenge: Make a list of your 3 favorite foods! ^_^"
```

**JavaScript Question:**
```
User: "How do I use let vs const?"
Maca: "Great question! :D

let age = 20;      // Can change
age = 21;          // ✅ Works!

const name = "Jo"; // Cannot change
name = "Sam";      // ❌ Error!

Try it: Which would you use for your birthday? (•_•)"
```

## Support

- Maca uses ASCII emotes: `^_^` `:D` `\\o/` `(•_•)` `>_<`
- Responses are always encouraging and beginner-friendly
- Includes code examples and practice exercises
- Stays under 200 tokens for speed

---

**Current Provider:** Check your `AI_PROVIDER` environment variable in Convex dashboard
**Default:** OpenAI (gpt-4o-mini) with bundled Convex keys

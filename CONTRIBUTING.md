# Contributing Guidelines - CyberAI Defense Platform

## Security-First Development Rules

### 🚫 Prohibited Actions (ASK FIRST)
- **Never add external scripts or analytics** without explicit written permission
- **Never commit secrets, API keys, or credentials** to the repository
- **Never install dependencies** without following the approval process below

### 📦 Dependency Installation Process
Before adding any new package dependency, you MUST:

1. **Propose in writing** with the following details:
   - Package name and exact version
   - Why it's needed (specific use case)
   - Bundle size impact (check bundlephobia.com)
   - Security considerations (recent vulnerabilities, maintainer reputation)
   - Alternative solutions considered

2. **Wait for explicit approval** before proceeding with installation

3. **Document the decision** in commit messages and PR descriptions

### Example Proposal Format:
```
Package: framer-motion@11.0.6
Purpose: Page transitions and micro-animations for user experience
Bundle Size: +45KB gzipped
Security: Well-maintained, no recent CVEs, 2M+ weekly downloads
Alternatives: CSS transitions (insufficient for complex animations), react-spring (larger bundle)
Risk Assessment: Low - popular package with active maintenance
```

### 🔐 Security Requirements

#### Code Security
- Use TypeScript for all new code (type safety)
- Validate all user inputs client AND server-side
- Never use `eval()`, `Function()`, or `dangerouslySetInnerHTML`
- Sanitize any dynamic content rendering

#### Secrets Management
- Store secrets only in platform secret store or Edge Functions
- Use environment variables for configuration (never hardcode)
- Prefix all environment variables appropriately (`VITE_` for public, server-side for private)
- Add `.env*` patterns to `.gitignore`

#### Data Protection
- Enable RLS on all database tables
- Test database policies with different user roles
- Never log sensitive user data
- Implement proper error handling (generic user messages)

### 🔍 Code Review Requirements

#### Before Submitting PR:
- [ ] TypeScript compiles without errors
- [ ] All form inputs validated
- [ ] No secrets in code or commit history
- [ ] Security checklist items addressed
- [ ] Tests pass (when applicable)

#### Security Review Focus:
- Input validation and sanitization
- Authentication and authorization logic
- Database query safety (SQL injection prevention)
- Error handling (information disclosure prevention)
- Dependency security (known vulnerabilities)

### 🚨 Incident Response
If you discover a security issue:
1. **DO NOT** commit fixes to main branch
2. **DO NOT** discuss in public channels/issues
3. **Immediately notify** the security team via secure channel
4. **Document** the issue privately for internal tracking

### 📚 Required Reading
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Supabase Security Best Practices](https://supabase.com/docs/guides/auth/security)
- Project-specific `SECURITY_PLAN.md` and `SECURITY_CHECKLIST.md`

### 🛠 Development Environment
- Use Node.js LTS version only
- Keep dependencies up-to-date (security patches)
- Run `npm audit` before any major changes
- Use IDE security plugins (ESLint security rules)

---
**By contributing to this project, you agree to follow these security guidelines and acknowledge that security is everyone's responsibility.**